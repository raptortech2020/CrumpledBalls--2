
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paperObject;
var bottomBox, rightBox, leftBox;


function preload()
{
	
}

function setup() {
	createCanvas(1900, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(250,200,75,75);

	dustbin = new Dustbin(1450,830,200,200);
	side = new Sides(1530,640,10,200);
	side1 = new Sides(1380,640,10,200);


	ground = new Ground(950, 750, 1900, 20);


	Engine.run(engine);
  
}


function draw() {
  background(211,211,211);
  Engine.update(engine);
  paperObject.display();
  dustbin.display();
  ground.display();

  drawSprites();

 
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:163,y:-163})
	}


}