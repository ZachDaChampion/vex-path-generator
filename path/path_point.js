class PathPoint {

  constructor (location, direction, start_weight=5, end_weight=5) {
    this.location = location;
    this.direction = direction;
    this.start_weight = start_weight;
    this.end_weight = end_weight;
  }
}

let point_path = [];
let shape_path = [];
let selected_type = null;
let selected_index = null;