var paper,b1,b2,b3,ground,box;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(1600, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	// paper = createSprite(20,650);
	paper = new Ball(200,450,40);
	        dustbin = new Dustbin(1200,650)
ground = new Ground(800,670,1600,20)
	
	//Create a Ground


	
}


function draw() {
 
  background(0);
 paper.display()
 ground.display()
 dustbin.display()
  
  drawSprites();

}
function keyPressed() 
{ if (keyCode === UP_ARROW) {
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-5}); } }


