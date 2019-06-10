class PathBezier {

  constructor (start_index, end_index, start_weight=5, end_weight=5) {
    this.start_index = start_index;
    this.end_index = end_index;
    this.start_weight = start_weight;
    this.end_weight = end_weight;

    this.calc_bezier();
  }

  calc_bezier() {
    this.curve = new Bezier(
      // pt 1,
      // pull pt 1,
      // pull pt 2,
      // pt 2
    );
  }

  // draw bezier
  draw (reference) {

    // setup
    stroke(0);
    strokeWeight(2);
    push();

    switch (reference) {

      // draw on topdown field
      case (Reference.topdown):
        translate(32, 32);
        // line();
        break;

      // draw on angled field
      case (Reference.angled):
        translate(32, 64 + config.topdown_image.dimensions.height * scale);
        // line();
        break;
    }

    pop();
  }
}