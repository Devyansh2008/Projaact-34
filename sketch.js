
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


	Engine.run(engine);
  
  ground = new Ground(400,350,220,20);
  fill(random(0,255),random(0,255),random(0,255))
    baluno=new ball(400,550)
     baldos=new ball(300,550)
     baltres=new ball(500,550)
    // balcuatro=new ball(450,550)
    // balcinco=new ball(500,550)
     chuno=new chain(baluno.ball,ground.body,0)
    chudos=new chain(baldos.ball,ground.body,-50)
     chutre=new chain(baltres.ball,ground.body,50)
    //  chuarto=new chain(balcuatro.ball,ground.body,50)
    //  chinco=new chain(balcinco.ball,ground.body,100)






}


function draw() {
  rectMode(CENTER);
  background((random(0,255),random(0,255),random(0,255)));
  

 
 
  // balcuatro.display()
  // balcinco.display()

 chudos.display()
//  chuarto.display()
  chutre.display()
//  chinco.display()
chuno.display()

baluno.display()
baldos.display()
baltres.display()


ground.display()

drawSprites();
 
}



