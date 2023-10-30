const { VerletPhysics2D, VerletParticle2D, VerletSpring2D } = toxi.physics2d;
const { GravityBehavior } = toxi.physics2d.behaviors;
const { Vec2D, Rect } = toxi.geom;

let world = new VerletPhysics2D();
let particles = [];
let springs = [];

function init(){
  //toxiclibs setup
  world.addBehavior(new GravityBehavior(new Vec2D(0,0.75)));
  world.setWorldBounds(new Rect(0,0,width,height));

  particles.push(new Particle(100,100,5,true));
  particles.push(new Particle(150,200,5,true));
  particles.push(new Particle(200,100,5,true));
  particles.push(new Particle(250,200,5,true));
  particles.push(new Particle(150,150,2,true));

  springs.push(new Spring(particles[0], particles[1], 0.01, true));
  springs.push(new Spring(particles[1], particles[4], 0.025));
  springs.push(new Spring(particles[2], particles[0], 0.01, true));
  springs.push(new Spring(particles[2], particles[3], 0.01, true));
  springs.push(new Spring(particles[1], particles[3], 0.01, true));
  springs.push(new Spring(particles[0], particles[4], 0.05));
  springs.push(new Spring(particles[2], particles[4], 0.025));
  springs.push(new Spring(particles[3], particles[4], 0.05));

  particles.forEach(function(particle){
    world.addParticle(particle);
  });
  springs.forEach(function(spring){
    world.addSpring(spring);
  });
}

function setup() {
  //p5 setup
  createCanvas(600,400);
  bg = color(0,255,255);

  init();
}

function draw() {
  background(bg);
  world.update();
  fill(100);
  stroke(0,0);
  particles.forEach(function(particle){
    particle.draw();
  });
  stroke(0, 255);
  springs.forEach(function(spring){
    spring.draw();
  });
}
