let field_angled;
let perspective_to_angle;
let field_topdown;
let scale;
let list_width = 384;

function preload() {
  field_angled = loadImage(config.angle_image.path);
  field_angled_front = loadImage(config.angle_image.front_layer_path);
  field_topdown = loadImage(config.topdown_image.path);
}

// calculate image scale and resize canvas
function scale_fields() {
  resizeCanvas(windowWidth, windowHeight - 128);
  scale = min([
    (width - 64 - list_width) / (config.topdown_image.dimensions.width),
    (width - 64 - list_width) / (config.angle_image.dimensions.width),
    (height - 96) / (config.topdown_image.dimensions.height + config.angle_image.dimensions.height)
  ]);
}

function setup() {

  // create full screen canvas
  createCanvas(0, 0);

  // calculate perspectives
  let angled_corners = [
    config.angle_image.perspective_coords.top_left.x, config.angle_image.perspective_coords.top_left.y,
    config.angle_image.perspective_coords.top_right.x, config.angle_image.perspective_coords.top_right.y,
    config.angle_image.perspective_coords.bottom_left.x, config.angle_image.perspective_coords.bottom_left.y,
    config.angle_image.perspective_coords.bottom_right.x, config.angle_image.perspective_coords.bottom_right.y,
  ];
  let top_down_corners = [
    config.topdown_image.perspective_coords.top_left.x, config.topdown_image.perspective_coords.top_left.y,
    config.topdown_image.perspective_coords.top_right.x, config.topdown_image.perspective_coords.top_right.y,
    config.topdown_image.perspective_coords.bottom_left.x, config.topdown_image.perspective_coords.bottom_left.y,
    config.topdown_image.perspective_coords.bottom_right.x, config.topdown_image.perspective_coords.bottom_right.y,
  ];
  perspective_to_angle = PerspT(top_down_corners, angled_corners);
  
  // scale
  scale_fields();
}

function draw() {

  // draw fields
  background(255);
  image(field_topdown, 32, 32, config.topdown_image.dimensions.width * scale, config.topdown_image.dimensions.height * scale);
  image(field_angled, 32, 32 + config.topdown_image.dimensions.height * scale + 32, config.angle_image.dimensions.width * scale, config.angle_image.dimensions.height * scale);

  // figure out which region the cursor is in
  let region = Region.get_region(mouseX, mouseY);

  // get cursor pos
  let p;

  // draw cursor on angled field
  if (region == Region.field_topdown) {
    p = new Point(
      (mouseX - 32) / scale,
      (mouseY - 32) / scale,
      Reference.topdown
    );
    stroke(0);
    fill(255);
    ellipse(
      p.get_x(Reference.angled) * scale + 32,
      p.get_y(Reference.angled) * scale + 32 + config.topdown_image.dimensions.height * scale + 32,
      5, 5
    );
    stroke(255, 50);
    fill(0, 50);
    ellipse(
      p.get_x(Reference.angled) * scale + 32,
      p.get_y(Reference.angled) *scale + 32 + config.topdown_image.dimensions.height * scale + 32,
      5, 5
    );
  }
  // draw cursor on topdown field
  else if (region == Region.field_angled) {
    p = new Point(
      (mouseX - 32) / scale,
      (mouseY - 64 - config.topdown_image.dimensions.height * scale) / scale,
      Reference.angled
    );
    stroke(0);
    fill(255);
    ellipse(
      p.get_x(Reference.topdown) * scale + 32,
      p.get_y(Reference.topdown) * scale + 32,
      5, 5
    );
  }

  // draw shapes
  for (var i = 0; i < shape_path.length; i++) {
    shape_path[i].draw(Reference.topdown);
    shape_path[i].draw(Reference.angled);
  }
  
  // draw foreground of angled field
  image(field_angled_front, 32,  32 + config.topdown_image.dimensions.height * scale + 32, config.angle_image.dimensions.width * scale, config.angle_image.dimensions.height * scale);

  // draw side menu
  draw_side_menu();
}

// recalculate scale when window resized
function windowResized() {
  scale_fields();
  console.log(scale);
}