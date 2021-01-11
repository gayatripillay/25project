const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,leftbin,downbin,rightbin,paper1

function preload()
{
	dustbinimage = loadImage('dustbin.png');
}

function setup() {
	
	
	var canvas = createCanvas(1400, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	leftbin = new Dustbin(1100,495,150,15);
	downbin = new Dustbin(1185,420,15,170);
	rightbin = new Dustbin(1015,420,15,170);
	
	ground1 = new Ground(700,550,1400,30);
	
	paper1 = new Paper(200,300);
	
	 Engine.run(engine);
  
}


function draw() {
	background("white");
	Engine.update(engine);
	
	
	paper1.display();
	ground1.display();
	leftbin.display();
	downbin.display();
	rightbin.display();
	image(dustbinimage,1000,330,200,200);
	
	
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});

		}
	}



