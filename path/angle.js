const AngleUnit = {
  'rad': 1,
  'deg': 180 / Math.PI,
  'rev': Math.PI * 2
}

class Angle {
  
  constructor (angle, unit=AngleUnit.deg) {
    this.angle = angle * unit;
  }
}