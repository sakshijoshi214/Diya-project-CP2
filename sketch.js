const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,dustbin;
var ground;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball(100,400,40);
	
	dustbin = new Dustbin(850,510,300,300);

	ground = new Ground(width/2,670,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  ball.display();
  dustbin.display();
  ground.display();
  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:130,y:-145});
	   
	 }
   }
