x_button = new Button(48, 104, list_width - 96, 40, 'X: 0"');
y_button = new Button(48, 168, list_width - 96, 40, 'Y: 0"');
angle_button = new Button(48, 232, list_width - 96, 40, 'θ: 0°');
weight_button = new Button(48, 296, list_width - 96, 40, 'Gravity: 1');

function draw_point_config(transx, transy) {

  // title
  textSize(56);
  textAlign(LEFT, TOP);
  noStroke();
  fill(0, 200);
  text('Point', 24, 24);

  // x coordinate
  x_button.update(mouseX - transx, mouseY - transy);
  x_button.draw();

  // y coordinate
  y_button.update(mouseX - transx, mouseY - transy);
  y_button.draw();

  // angle
  angle_button.update(mouseX - transx, mouseY - transy);
  angle_button.draw();

  // weight
  weight_button.update(mouseX - transx, mouseY - transy);
  weight_button.draw();
  

}