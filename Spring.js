class Spring extends toxi.physics2d.VerletSpring2D {
  constructor(particle1, particle2, hardness=1, draw=false) {
    super(particle1, particle2, dist(particle1.x, particle1.y, particle2.x, particle2.y), hardness);
    this.d = draw;
    this.p1 = particle1;
    this.p2 = particle2;
  }
  draw(){
    if (this.d){
      line(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
    }
  }
}
