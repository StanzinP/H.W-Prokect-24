
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 1800);

	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground = new Ground(width/2, 650, width, 10);

	//Create the Bodies Here.
    b1 = new Box(500,620,20,100);
	b2 = new Box(700,620,20,100);
	b3 = new Box(600,650,200,20);

	paper = new Paper(50,300,20);

	Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  b1.display();
  b2.display();
  b3.display();
}

function keyPressed() {
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});
   }
}