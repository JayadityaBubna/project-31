//creating basics for physics engine
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
var engine,world;

//creating arrays
var particles=[];
var plinkos=[];
var divisions=[];

//creating variable for division height
var divisionHeight=300;

//creating variable ground
var ground;


function setup() {
  //creating canvas
  createCanvas(480,800);
  
  //creating an engine and world
  engine=Engine.create();
  world=engine.world;
  
  //creating ground
  ground=new Ground(width/2,height,width,20);
  
  //creating divisions
  for(var i=0;i<=width;i=i+80){
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }
  
  //creating plinkos
  for(var j=45;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=70;j<=470;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j=45;j<=470;j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j=70;j<=470;j=j+50){
    plinkos.push(new Plinko(j,375));
  }

  
}

function draw() {
  //background color
  background(0); 

  //updating engine
  Engine.update(engine);
  
  //creating particles at random
  if(frameCount%80===0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }
  
  //displaying particles
  for(var k=0;k<particles.length;k++){
    particles[k].display();
  }
  
  //displaying divisions
  for(var i=0;i<divisions.length;i++){
    divisions[i].display();
  }
  
  //displaying plinkos
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }

  //displaying ground
  ground.display();
  drawSprites();

}