class PathPoint {

  constructor (location, direction, weight=5) {
    this.location = location;
    this.direction = direction;
    this.weight = weight;
  }
}

let point_path = [new PathPoint(new Point(32, 32, Reference.world), new Angle(0))];
let shape_path = [];
let selected_type = null;
let selected_index = 0;