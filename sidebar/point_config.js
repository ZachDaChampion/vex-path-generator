x_button = new Button (
  48, 104,
  list_width - 96, 40,
  `X: ${point_path[selected_index].location.x}"`,
  function() {
    point_path[selected_index].location.x = float(prompt('Enter new value for X')) || point_path[selected_index].location.x;
    x_button.label = `X: ${point_path[selected_index].location.x}"`;
  }
);

y_button = new Button (
  48, 168, 
  list_width - 96, 40, 
  `Y: ${point_path[selected_index].location.y}"`, 
  function() {
    point_path[selected_index].location.y = float(prompt('Enter new value for Y')) || point_path[selected_index].location.y;
    y_button.label = `Y: ${point_path[selected_index].location.y}"`;
  }
);

angle_button = new Button (
  48, 232, 
  list_width - 96, 40, 
  `θ: ${point_path[selected_index].direction.angle / AngleUnit.deg}°`, 
  function() {
    point_path[selected_index].direction = new Angle(float(prompt('Enter new angle'))) || point_path[selected_index].direction;
    angle_button.label = `θ: ${point_path[selected_index].direction.angle / AngleUnit.deg}°`;
  }
);

weight_button = new Button (
  48, 296, list_width - 96, 40, 
  `Weight: ${point_path[selected_index].weight}`, 
  function() {
    point_path[selected_index].weight = float(prompt('Enter new weight')) || point_path[selected_index].weight;
    weight_button.label = `Weight: ${point_path[selected_index].weight}`;
  }
);

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

function update_point_config() {
  x_button.label = `X: ${point_path[selected_index].location.x}"`;
  y_button.label = `Y: ${point_path[selected_index].location.y}"`;
  angle_button.label = `θ: ${point_path[selected_index].direction.angle / AngleUnit.deg}°`;
  weight_button.label = `Weight: ${point_path[selected_index].weight}`;
}