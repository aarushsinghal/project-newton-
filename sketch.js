
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ball2;
var ball3;
var ball4;
var ball5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 ball=new Ball(400,350);
	 ball2=new Ball(350,350);
	 ball3=new Ball(450,350);
	 ball4=new Ball(300,350);
	 ball5=new Ball(500,350);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  drawSprites();
 
}



