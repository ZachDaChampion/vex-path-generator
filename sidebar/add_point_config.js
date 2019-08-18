line_button = new Button (
  48, 104, 
  list_width - 96, 40, 
  `Draw Line`, 
  function() {
    
  },
  true, true
);

curve_buttom = new Button (
  48, 168,
   list_width - 96, 40, 
  `Draw Curve`, 
  function() {
    
  },
  true, false
);

curve_angle_button = new Button (
  48, 232,
  list_width - 96, 40, 
  `End Angle: 0°`, 
  function() {
    
  }
);

curve_start_weight_button = new Button (
  48, 296,
  list_width - 96, 40, 
  `Start Weight: 0`, 
  function() {
    
  }
);

curve_end_weight_button = new Button (
  48, 360,
  list_width - 96, 40, 
  `End Weight: 0`, 
  function() {
    
  }
);

function draw_add_point_config(transx, transy) {

  // title
  textSize(56);
  textAlign(LEFT, TOP);
  noStroke();
  fill(0, 200);
  text('Add Point', 24, 24);

  // x coordinate
  line_button.update(mouseX - transx, mouseY - transy);
  line_button.draw();

  // y coordinate
  curve_buttom.update(mouseX - transx, mouseY - transy);
  curve_buttom.draw();

  // angle
  curve_angle_button.update(mouseX - transx, mouseY - transy);
  curve_angle_button.draw();

  // weight
  curve_start_weight_button.update(mouseX - transx, mouseY - transy);
  curve_start_weight_button.draw();
  curve_end_weight_button.update(mouseX - transx, mouseY - transy);
  curve_end_weight_button.draw();
}

function update_add_point_config() {
  
}