const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var pen1,pen2,pen3,pen4;
var form,player,game;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;
  
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
	
	Engine.run(engine);
  
}


function draw() {
  
  drawSprites();
 }
 