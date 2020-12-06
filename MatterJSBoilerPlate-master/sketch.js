
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,ball,ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	box1 = new Box(800,325,15,200);
	box2 = new Dust(900,380,200,15);
	box3 = new Box(1000,325,15,200);

	ball = new Ball(150,320,25);

	ground = new Ground(600,392,1200,15);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  Engine.update(engine);
  console.log(ground.y);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  
  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(ball.body,ball.body.position,{x:115,y:-130});
	}
}



