
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1,block2,block3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  function keyPressed() {
	if (keyCode === DOWN_ARROW) 

	Engine.run(engine);
}
  }
		
  groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	block1=createSprite(350,650,200,20);
	block1.shapeColor="red"

	block2=createSprite(250,610,20,100);
	block2.shapeColor="red"

	block3=createSprite(459,610,20,100);
	block3.shapeColor="red"



function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin.display()
  paper.display()
  drawSprites();
 
}



