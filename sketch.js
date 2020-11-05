var fixedRect;
var movingRect;
var gameObject1;
var gameObject2;
var gameObject3;
var gameObject4;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  fixedRect = createSprite(400, 200, 50,100);
  fixedRect.shapeColor = "green"
  movingRect = createSprite(500,300,100,50);
  movingRect.shapeColor = "green"
  gameObject1 = createSprite(300,250,60,150);
  gameObject1.shapeColor = "green"
  gameObject2 = createSprite(200,150,30,60);
  gameObject2.shapeColor = "green"
}

function draw() {
  background(0,0,0); 
   movingRect.x = World.mouseX;
   movingRect.y = World.mouseY;
   //console.log(fixedRect.width/2 + movingRect.width/2);
   //console.log(movingRect.x - fixedRect.x);
    if(isTouching(movingRect, gameObject1)){
      gameObject1.shapeColor = "blue";
        movingRect.shapeColor = "blue";
    }else{
      gameObject1.shapeColor = "green";
        movingRect.shapeColor = "green";
    }
    bounceOff(movingRect,fixedRect);
  drawSprites();
}
 
