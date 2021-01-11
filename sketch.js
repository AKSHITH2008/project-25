
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=new Paper();
	ground=new Ground();

	Engine.run(engine);

	log1=new Dustbin(650,670,150,20);
//	log2=new Dustbin(565,605,20,150);
//	log3=new Dustbin(735,605,20,150);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 ball.display();
 ground.display();
 log1.display();
 //log2.display();
// log3.display();
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}



