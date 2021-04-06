var Runner,img
var coin,img1
var bad,img2
var car,img3
var bus,img4

function preload(){
img=loadImage("Runner.png");
img1=loadImage("Coin.png");
img2=loadImage("bad.png");
img3=loadImage("car.png");
img4=loadImage("Bus.png");
}

function setup() {
  createCanvas(1100,750);

  bad=createSprite(500,200,10,10);
  bad.addImage(img2);
  bad.scale=2
  bad.velocityX=-2
  
  


  Runner=createSprite(100,350,10,10);
  Runner.addImage(img)
  Runner.scale=0.3



  



}

function draw() {
 background("black");
 
 spawnObstacles();
 spawnCoin();

 //Background Moving 
if(bad.x<500){
  bad.x=600
}
 
   // Movement of the Runner 

if(keyDown("RIGHT_ARROW")){
  Runner.x=Runner.x+5
}

if(keyDown("LEFT_ARROW")){
  Runner.x=Runner.x-6
}

if(keyDown("UP_ARROW")){
  Runner.y=Runner.y-5
}

if(keyDown("DOWN_ARROW")){
  Runner.y=Runner.y+6
}
//if(coin.isTouching(Runner)){
  //coin.velocityX=0
//}




 
   
    drawSprites();


}

function spawnObstacles(){
  if(frameCount%100===0){
    var obstacle=createSprite(1200,500,50,50);
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
  }
}

function spawnCoin(){
  if(frameCount%100===0){
    coin=createSprite(1000,150,10,10);
    coin.addImage(img1);
    coin.scale=0.3
    coin.velocityX=-5;
    coin.y=Math.round(random(50,700));
  }
}