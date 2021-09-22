var ship,sea
var shipImg,seaImg

function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-3.png",
                         "ship-2.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  background("white");
  


//create a sea Sprite
sea=createSprite(400,200,900,10);
sea.addImage("sailing sea",seaImg);
sea.scale=0.4;
sea.velocityX=-3;




//create a ship Sprite
ship=createSprite(200,250,10,10);
ship.addAnimation("moving ship",shipImg);
ship.scale=0.25;
if (ship.width<0) {ship.x = 400}






}

function draw() {
  
  background("white");
 


drawSprites();
}