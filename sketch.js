
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground=new Ground(0,750,1000,10);
  d1= new Divisions(0,650,10,200)
  Particle= new particle(50,100,20)
  
  Plinko=new plinko(10,100,10)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  d1.display();
  Plinko.display();
  Particle.display();
 
  drawSprites();
 
}



