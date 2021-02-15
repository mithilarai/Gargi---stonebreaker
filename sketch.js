const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var backgroundImg,stone1;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
backgroundImg = loadImage("background.png");


}
function setup(){
createCanvas(1200,600);
engine = Engine.create();
world = engine.world;
Engine.run(engine);
ground = new Ground(0,580,1205,5);
stone1 = new Stone(800,200,80,80);
stone2 = new Stone(800,200,80,80);
stone3 = new Stone(800,200,80,80);
stone4 = new Stone(800,200,80,80);
stone5 = new Stone(800,200,80,80);
stone6 = new Stone(800,200,80,80);
ground2 = new Ground(800,580,1200,5);
man = new Man(200,300,150,150);

hammer = new Hammer(300,200,80,80);
chain = new Chain(hammer.body,man.body);
}

function draw(){
background("white");

stone1.display();
stone2.display();
stone3.display();
stone4.display();

man.display();
chain.display();
ground2.display();
hammer.display();
ground.display();






drawSprites();



}
function mouseDragged(){
hammer.body.position.x = mouseX;
hammer.body.position.y = mouseY;
}