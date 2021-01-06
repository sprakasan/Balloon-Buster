//creating variables
var playground,playgroundImage;
var bow,bowImage;
var arrow,arrowI,arrowGroup;
var balloon,balloon2,balloon3,balloon4;
var redGroup,greenGroup,blueGroup,pinkGroup;
var red1,blue1,pink1,green1;


var score=0;

function preload(){
playgroundImage=loadImage("background0.png");
bowImage=loadImage("bow0.png");
  red1=loadImage("red_balloon0.png");
  pink1=loadImage("pink_balloon0.png");
  green1=loadImage("green_balloon0.png");
  blue1=loadImage("blue_balloon0.png");
  arrowI=loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
playground=createSprite(0,0,600,600);
playground.addImage(playgroundImage);
playground.scale=3;

playground.velocityX=-4;
  
  
bow=createSprite(500,300,20,20); 
bow.addImage(bowImage);
bow.scale=0.7;

redGroup=new Group();
blueGroup=new Group();
greenGroup=new Group();  
pinkGroup=new Group();
arrowGroup=new Group();
  
}


function draw() {

bow.y=mouseY;
  
  if(keyDown("space")){
   createArrow();
    arrow.y= bow.y
  }

if(playground.x < 0){
  playground.x = playground.width / 2;
}
var select_balloon = Math.round(random(1,4))
if(World.frameCount%80 == 0){
  if(select_balloon == 1){
    redBalloon();
  }
  else 
    if(select_balloon == 2){
  blueBalloon()
  }
  else if(select_balloon == 3){
    greenBalloon()
  }
  else if(select_balloon == 4){
    pinkBalloon()
  }
  
}
  if (arrowGroup.isTouching(redGroup)){
    redGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  
  if (arrowGroup.isTouching(blueGroup)){
    blueGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  
   if (arrowGroup.isTouching(greenGroup)){
    greenGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }

   if (arrowGroup.isTouching(pinkGroup)){
    pinkGroup.destroyEach();
    arrowGroup.destroyEach();
     score=score+1;
  }
  
 drawSprites(); 
  text("score: "+score,500,30);

  
}

function createArrow(){
  arrow=createSprite(500,300,5,10);
arrow.addImage(arrowI);
arrow.scale=0.3;
  arrow.velocityX=-6
  arrow.lifetime=150;
  
  arrowGroup.add(arrow);
}

function redBalloon(){
  var red=createSprite(0,Math.round(random(20,370)),10,10);
red.addImage(red1);
red.scale=0.050;
red.velocityX=5;
red.lifetime=150;
  
redGroup.add(red);
}

function blueBalloon(){
   var blue=createSprite(0,Math.round(random(20,370)),10,10);
blue.addImage(blue1);
blue.scale=0.050;
blue.velocityX=5;
blue.lifetime=150;
  
blueGroup.add(blue);
}

function greenBalloon(){
   var green=createSprite(0,Math.round(random(20,370)),10,10);
green.addImage(green1);
green.scale=0.050;
green.velocityX=5;
green.lifetime=150;
 
greenGroup.add(green);
}

function pinkBalloon(){
  var pink=createSprite(0,Math.round(random(20,370)),10,10);
pink.addImage(pink1);
pink.scale=0.050;
pink.velocityX=5;
pink.lifetime=150; 
  
pinkGroup.add(pink);
}

