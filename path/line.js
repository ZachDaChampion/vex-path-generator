class PathLine {

  constructor (start_index, end_index) {
    this.start_index = start_index;
    this.end_index = end_index;
  }

  // draw line
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