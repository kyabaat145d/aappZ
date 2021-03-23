const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function preload(){

}

function setup(){
  var canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(600,595,1200, 10);
}

function draw(){
  background("yellow");
  Engine.update(engine);

  ground.display();
}