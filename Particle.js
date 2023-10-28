class Particle extends toxi.physics2d.VerletParticle2D{
  constructor(x, y, radius = 10, draw = false) {
    super(x, y);
    this.r = radius;
    this.d = draw;
  }
  draw(){
    //doesn't draw to avoid drawing using a loop.
    if (this.d){
      circle(this.x, this.y, this.r*2);
    }
  }
}
