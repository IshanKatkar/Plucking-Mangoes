
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treeImg,boy,ground,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,SlingShot;


function setup() {
	createCanvas(1500, 1000);


	engine = Engine.create();
	world = engine.world;
	
	Engine.run(engine);
  

	tree=new Tree(1200,300,550,550);
	boy=new Boy(300,530,300,300);
	stone=new Stone(500,200,40);
	SlingShot=new Slingshot(stone.body,({x:230,y:440}))
	mango1=new Mango(1200,200,60);
	mango2=new Mango(1400,200,60);
	mango3=new Mango(1240,150,60);
	mango4=new Mango(1190,100,60);
	mango5=new Mango(1020,200,60);
	mango6=new Mango(1100,250,60);
	mango7=new Mango(1300,230,60);
	mango8=new Mango(1140,180,60);
	mango9=new Mango(1320,180,60);
	ground = new Ground(700,height/2+130,1900,20);


}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  tree.display();
  stone.display();
  boy.display();
  SlingShot.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  ground.display();

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  detectCollision(stone,mango9);
  


	
	 
 
}


function mouseDragged(){
    
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
	SlingShot.fly();
}

function keyPressed(){

	if(keyCode === 32){

	 SlingShot.attach(stone.body);
	
	}
}

function detectCollision(lstone,lmango){

	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);

	}
}

     






