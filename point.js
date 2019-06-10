const Reference = {
  'world': 0,
  'topdown': 1,
  'angled': 2
};

class Point {

  constructor (x, y, reference=Reference.world) {

    switch (reference) {

      case (Reference.world):
        this.x = x;
        this.y = y;
        break;

      case (Reference.topdown):
        this.x = (x - config.topdown_image.perspective_coords.top_left.x) * 144.0 / config.topdown_image.dimensions.field_width;
        this.y = (y - config.topdown_image.perspective_coords.top_left.y) * 144.0 / config.topdown_image.dimensions.field_height;
        break;

      case (Reference.angled):
        let transformed = perspective_to_angle.transformInverse(x, y);
        this.x = (transformed[0] - config.topdown_image.perspective_coords.top_left.x) * 144.0 / config.topdown_image.dimensions.field_width;
        this.y = (transformed[1] - config.topdown_image.perspective_coords.top_left.x) * 144.0 / config.topdown_image.dimensions.field_height;
        break;
    }
  }

  get_x (reference=Reference.world) {
    switch (reference) {
      case (Reference.world): return this.x;
      case (Reference.topdown): return this.x * config.topdown_image.dimensions.field_width / 144.0 + config.topdown_image.perspective_coords.top_left.x;
      case (Reference.angled): return perspective_to_angle.transform(
        this.x * config.topdown_image.dimensions.field_width / 144.0 + config.topdown_image.perspective_coords.top_left.x,
        this.y * config.topdown_image.dimensions.field_height / 144.0 + config.topdown_image.perspective_coords.top_left.y
      )[0];
    }
  }

  get_y (reference=Reference.world) {
    switch (reference) {
      case (Reference.world): return this.y;
      case (Reference.topdown): return this.y * config.topdown_image.dimensions.field_height / 144.0 + config.topdown_image.perspective_coords.top_left.y;
      case (Reference.angled): return perspective_to_angle.transform(
        this.x * config.topdown_image.dimensions.field_width / 144.0 + config.topdown_image.perspective_coords.top_left.x,
        this.y * config.topdown_image.dimensions.field_height / 144.0 + config.topdown_image.perspective_coords.top_left.y
      )[1];
    }
  }
}
