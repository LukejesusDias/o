var ship1,ship_sailling,edges;
var seaImage;
var sea;
function preload(){
ship_sailling=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png");
}


function setup(){
  createCanvas(400,400);
ship=createSprite(50,160,20,50);
ship=addAnimation("sailling",ship_sailling);
edges = createEdgeSprite();

ship.scale=1;
ship.x=50

sea = createSprite(200,200,400,20);
sea.addImage("sea",seaImage);
sea.x=sea.width/2;
}

function draw() {
  background("blue");

  if(keyDown("space")){
    ship.velocityY = -10;
  }
 ship.velocityY = ship.velocityY + 0.5;

 ship.collide(sea);

console.log(sea.x);
sea.velocityX=-3;

if(sea.x<0){
  sea.x=sea.width/2;
}



 drawSprites();

}