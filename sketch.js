var Runner,img
var coin,img1
var bad,img2
var car,img3
var bus,img4,img5;
var Score=0;
var gameState="play";


function preload(){
img=loadImage("Runner.png");
img1=loadImage("Coin.png");
img2=loadImage("bad.png");
img3=loadImage("car.png");
img4=loadImage("Bus.png");
img5=loadImage("bg.jpg");
}

function setup() {
  createCanvas(1100,600);

  obstacleGroup=new Group();
  coinGroup=new Group();
  bad=createSprite(500,200,10,10);
  bad.addImage(img2);
  bad.scale=2
  bad.velocityX=-2
  
    Runner=createSprite(100,350,10,10);
  Runner.addImage(img)
  Runner.scale=0.3
  Runner.debug=true;
  Runner.setCollider("rectangle",0,0,780,300);
}

function draw() {
 
 if(gameState==="play"){
background("black");
 spawnObstacles();
 spawnCoin();

 //Background Moving 
if(bad.x<500){
  bad.x=600
}
 
   // Movement of the Runner 

if(keyDown("RIGHT_ARROW")){
  Runner.x=Runner.x+9
}

if(keyDown("LEFT_ARROW")){
  Runner.x=Runner.x-9
}

if(keyDown("UP_ARROW")){
  Runner.y=Runner.y-9
}

if(keyDown("DOWN_ARROW")){
  Runner.y=Runner.y+9
}

for(var i=0;i<coinGroup.length;i++){
  if(coinGroup.get(i).isTouching(Runner)){
    coinGroup.get(i).destroy();
    Score=Score+1;
 }
}

for(var i=0;i<obstacleGroup.length;i++){
  if(obstacleGroup.get(i).isTouching(Runner)){
    //obstacleGroup.get(i).destroy();
    gameState="end";
    
 }
}
   
    drawSprites();
    textSize(30);
    fill("white");
    text("Score:"+Score,800,50);
 }

else if(gameState==="end"){
   background(img5);
    
 }
   
}

function spawnObstacles(){
  if(frameCount%100===0){
    var obstacle=createSprite(1200,500,50,50);
    obstacle.debug=true;
    //obstacle.setCollider("rectangle",0,0,780,300);
    obstacle.velocityX=-5;
    obstacle.y=Math.round(random(50,700));
    var rand=Math.round(random(1,2));
    if(rand===1){
      obstacle.addImage(img3);
    }
    else if(rand===2){
      obstacle.addImage(img4);
    }
    obstacle.scale=0.5;
    obstacleGroup.add(obstacle);
  }
}

function spawnCoin(){
  if(frameCount%100===0){
    coin=createSprite(1000,150,10,10);
    coin.addImage(img1);
    coin.scale=0.3
    coin.debug=true;
    coin.setCollider("rectangle",0,0,280,300);
    coin.velocityX=-5;
    coin.y=Math.round(random(50,700));
      coinGroup.add(coin);
  }
}


