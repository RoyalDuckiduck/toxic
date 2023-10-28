const { VerletPhysics2D, VerletParticle2D, VerletSpring2D } = toxi.physics2d;
const { GravityBehavior } = toxi.physics2d.behaviors;
const { Vec2D } = toxi.geom;

let world = new VerletPhysics2D();

function setup() {
  createCanvas(400,400);
  bg = color(0,255,255);
}

function draw() {
  background(bg);
}
