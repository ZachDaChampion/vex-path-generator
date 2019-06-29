class Button {

  constructor(x, y, width, height, label) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.label = label;

    this.mouse_over = false;
    this.mouse_down = false;
    this.fresh_click = false;
    this.fresh_release = false;
  }

  update(mx, my) {

    // check if mouse is over button
    this.mouse_over = mx > this.x && mx < this.x + this.width && my > this.y && my < this.y + this.height;

    // check if mouse is down
    let down = mouseIsPressed && mouseButton == LEFT;

    this.fresh_click = this.mouse_over && down && !this.mouse_down;
    this.fresh_release = this.mouse_over && !down && this.mouse_down;
    this.mouse_down = down && this.mouse_over;
  }

  draw() {

    stroke(128);
    let clr = 192;
    if (this.mouse_over) clr = 128;
    if (this.mouse_down) clr = 64;
    fill(clr);

    rect(this.x, this.y, this.width, this.height, 12);

    textAlign(LEFT, CENTER);
    textSize(this.height * .625);
    noStroke();
    if (clr == 192) fill(128);
    else if (clr == 128) fill(64);
    else fill(192);
    text(this.label, this.x + 12, this.y + this.height/2 + 2);
  }

}