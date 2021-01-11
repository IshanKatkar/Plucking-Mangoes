
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,treeImg
function preload()
{
	
	treeImg=loadImage("tree.png")
}

function setup() {
	createCanvas(1500, 1290);


	engine = Engine.create();
	world = engine.world;

	tree=new Tree(200,20,20,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  tree.display();
 
}



