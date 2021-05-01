
var hunter, hunter_running
var runner, runner_running
var ground, invisibleGround, groundImage;
var bg;
var backgroundImg;

function preload(){

  
  backgroundImg = loadImage("bg2.png")
  
  hunter_running = loadAnimation("H1.png", "H2.png", "H3.png", "H4.png", "H5.png", "H6.png", "H7.png", "H8.png");
  runner_running = loadAnimation("R1.png", "R2.png", "R3.png", "R4.png", "R5.png", "R6.png")
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bg = createSprite(width/2, height/2, windowWidth*4, windowHeight)
  bg.addImage(backgroundImg)
  
  bg.velocityX=-3;
  bg.scale= 2;
  
  hunter = createSprite(50,height-70,20,50);
  
  
  hunter.addAnimation("running", hunter_running);

  

 // invisibleGround = createSprite(width/2,height-10,width,125);  
  // invisibleGround.shapeColor = "#f4cbaa";
  
  // invisibleGround.visible =false

  
}

function draw() {
  
  background(0);

 // console.log(bg.x);
    
   if(bg.x<200)
   {
     bg.x= width/2;
   }
  
  drawSprites();
}


