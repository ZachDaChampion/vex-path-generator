function draw_side_menu() {

  translate(width - list_width, 0);

  // draw background
  noStroke();
  fill(200);
  rect(0, 0, list_width, height);

  // draw point config
  draw_point_config(width - list_width, 0);

}