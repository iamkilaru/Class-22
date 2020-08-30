//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ground_options;
var ball, ball_options;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;
  //bounce off for ball
  ball_options = {
    restitution: 2.000000000000001
  };
  
  ball = Bodies.circle(200,100,20, ball_options); //passing options to the object
  World.add(world,ball);
  //Rectangle, circle (Matter.Bodies.rectangle(), circle())

  ground_options = {isStatic: true};

  ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
  World.add(world, ground);

  console.log(ground);
}

function draw() {
  background(0);  
  //update the whole engine in every frame
  Engine.update(engine);
  //takes the x and y coordinates at the center of the rectangle
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  
  //creating the ball
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}

/*
Library whose objects will be following the laws of physics
PHYSICS ENGINE
- bounce off, collision detection, gravity, friction
- tuning physics engine - changing the behaviour of the objects in this world
- box2d, matter

MATTER

1. Matter.Engine - used to create the physics engine, which follows all the laws of physics (UNIVERSE)
2. Matter.World - used to create the physical world & add objects to it (SURROUNDING)
3. Matter.Bodies - objects in the world

Nicknames that we will be using in the code - NAMESPACING - to make it easier to read & write
*/