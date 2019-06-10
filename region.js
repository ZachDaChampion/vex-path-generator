const Region = {

  'field_topdown': 0,
  'field_angled': 1,

  // determine which region a point is at on the screen
  'get_region': function (x, y) {

    // topdown field
    if (
      x >= 32 + (config.topdown_image.perspective_coords.top_left.x * scale) &&
      x <= 32 + (config.topdown_image.perspective_coords.top_left.x * scale) + config.topdown_image.dimensions.field_width * scale &&
      y >= 32 + (config.topdown_image.perspective_coords.top_left.y * scale) &&
      y <= 32 + (config.topdown_image.perspective_coords.top_left.y * scale) + config.topdown_image.dimensions.field_height * scale
    ) return 0;

    // angled field
    let p = new Point(
      (x - 32) / scale,
      (y - 32 - config.topdown_image.dimensions.height * scale - 32) / scale,      
      Reference.angled
    );
    if (
      p.x >= 0 &&
      p.x <= 144 &&
      p.y >= 0 &&
      p.y <= 144
    ) return 1;
  }
};
