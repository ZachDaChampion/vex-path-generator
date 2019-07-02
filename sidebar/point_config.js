x_button = new Button (
  48, 104,
  list_width - 96, 40,
  `X: 0`,
  function() {
    point_path[selected_index].location.x = float(prompt('Enter new value for X')) || point_path[selected_index].location.x;
    x_button.label = `X: ${point_path[selected_index].location.x}"`;
  }
);

y_button = new Button (
  48, 168, 
  list_width - 96, 40, 
  `Y: 0"`, 
  function() {
    point_path[selected_index].location.y = float(prompt('Enter new value for Y')) || point_path[selected_index].location.y;
    y_button.label = `Y: ${point_path[selected_index].location.y}"`;
  }
);

angle_button = new Button (
  48, 232, 
  list_width - 96, 40, 
  `θ: 0°`, 
  function() {
    point_path[selected_index].direction = new Angle(float(prompt('Enter new angle'))) || point_path[selected_index].direction;
    angle_button.label = `θ: ${point_path[selected_index].direction.angle / AngleUnit.deg}°`;
  }
);

start_weight_button = new Button (
  48, 296,
   list_width - 96, 40, 
  `Start Weight: 0`, 
  function() {
    point_path[selected_index].start_weight = float(prompt('Enter new start weight')) || point_path[selected_index].start_weight;
    start_weight_button.label = `Start Weight: ${point_path[selected_index].start_weight}`;
  }
);

end_weight_button = new Button (
  48, 360,
  list_width - 96, 40, 
  `End Weight: 0`, 
  function() {
    point_path[selected_index].end_weight = float(prompt('Enter new end weight')) || point_path[selected_index].end_weight;
    end_weight_button.label = `End Weight: ${point_path[selected_index].end_weight}`;
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
  start_weight_button.update(mouseX - transx, mouseY - transy);
  start_weight_button.draw();
  end_weight_button.update(mouseX - transx, mouseY - transy);
  end_weight_button.draw();
}

function update_point_config() {
  x_button.label = `X: ${point_path[selected_index].location.x}"`;
  y_button.label = `Y: ${point_path[selected_index].location.y}"`;
  angle_button.label = `θ: ${point_path[selected_index].direction.angle / AngleUnit.deg}°`;
  start_weight_button.label = `Start Weight: ${point_path[selected_index].start_weight}`;
  end_weight_button.label = `End Weight: ${point_path[selected_index].end_weight}`;
}