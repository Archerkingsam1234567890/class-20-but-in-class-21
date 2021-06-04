// const are constants
// it is namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
// we cannot leave the angle parameters empty
var angle=60;
var poly;
var wedge;
var wall;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 5,
    frictionAir:0.1
  }
   
   var ground_options ={
     isStatic: true
   };
   var ops ={
     isStatic:true
   }
   

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  wall = Bodies.rectangle(300,150,70,10 , ground_options);
  World.add(world,wall);

  wedge = Bodies.rectangle(100,200,100,20,ops);
  World.add(world,wedge) ;

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("orange");
  Engine.update(engine);
  
  Matter.Body.rotate(wedge,angle);
  // push function is used to change to new settings
  push();
  translate(wedge.position.x , wedge.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();

  angle += 0.1;

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(wall.position.x , wall.position.y,70,20);


  
  
}

