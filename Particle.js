class Particle {
  constructor(x, y, radius = 10, gravity = true, draw = false) {
    this.x = x;
    this.y = y;
    this.r = radius;
    this.g = gravity;
    this.d = draw;
  }
  draw(){
    //doesn't draw to avoid drawing using a loop.
    if (this.d){
      circle(this.x, this.y, r);
    }
  }
}
