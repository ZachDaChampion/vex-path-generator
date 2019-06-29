class PathBezier {

  constructor (start_index, end_index, start_weight=5, end_weight=5) {
    this.start_index = start_index;
    this.end_index = end_index;
    this.start_weight = start_weight;
    this.end_weight = end_weight;

    this.calc_bezier();
  }

  calc_bezier() {

    // calculate relative pull points
    let pull_a = new Point(Math.cos(point_path[this.start_index].direction.angle) * this.start_weight, Math.sin(point_path[this.start_index].direction.angle) * this.start_weight, Reference.world);
    let pull_b = new Point(Math.cos(point_path[this.end_index].direction.angle + Math.PI) * this.end_weight, Math.sin(point_path[this.end_index].direction.angle + Math.PI) * this.end_weight, Reference.world);

    // generate curve
    this.curve = new Bezier(
      point_path[this.start_index].location.get_x(Reference.world), point_path[this.start_index].location.get_y(Reference.world),
      point_path[this.start_index].location.get_x(Reference.world) + pull_a.get_x(Reference.world), point_path[this.start_index].location.get_y(Reference.world) + pull_a.get_y(Reference.world),
      point_path[this.end_index].location.get_x(Reference.world) + pull_b.get_x(Reference.world), point_path[this.end_index].location.get_y(Reference.world) + pull_b.get_y(Reference.world),
      point_path[this.end_index].location.get_x(Reference.world), point_path[this.end_index].location.get_y(Reference.world)
    );

    // generate raw lut
    this.lut_raw = this.curve.getLUT();
    console.log(Math.cos(point_path[this.start_index].direction.angle + Math.PI));
    console.log(point_path[this.start_index].direction.angle, pull_a, pull_b, this.lut_raw);

    // generate lut of path points
    this.lut = [];
    for (let i = 0; i < this.lut_raw.length; i++) {
      this.lut.push(new Point(this.lut_raw[i].x, this.lut_raw[i].y, Reference.world));
    }

    console.log(this.lut);
  }

  // draw bezier
  draw (reference) {

    // setup
    stroke(0);
    strokeWeight(2);
    noFill();
    push();

    switch (reference) {

      // draw on topdown field
      case (Reference.topdown):
        translate(32, 32);
        beginShape();
        for (let i = 0; i < this.lut.length; i++) {
          vertex(this.lut[i].get_x(Reference.topdown) * scale, this.lut[i].get_y(Reference.topdown) * scale);
        }
        endShape();
        break;

      // draw on angled field
      case (Reference.angled):
        translate(32, 64 + config.topdown_image.dimensions.height * scale);
        beginShape();
        for (let i = 0; i < this.lut.length; i++) {
          vertex(this.lut[i].get_x(Reference.angled) * scale, this.lut[i].get_y(Reference.angled) * scale);
        }
        endShape();
        break;
    }

    pop();
  }
}