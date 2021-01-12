var movingRectangle
var fixedRectangle
var rect1
var rect2
var rectUp
var rectDown
function setup() {
  createCanvas(800,400);
  movingRectangle= createSprite(400, 200, 50, 50);
  movingRectangle.shapeColor = 'blue';
  fixedRectangle= createSprite(200, 200, 50, 50);
  fixedRectangle.shapeColor = 'blue';
  rect1 = createSprite(100,100,50,50);
  rect2 = createSprite(200,100,50,50);
  rect2.shapeColor = "green";
  rect1.shapeColor = "purple";
  rect1.velocityX = 2;
  rect2.velocityX = -2;
  rectUp = createSprite(500,400,50,50);
  rectDown = createSprite(500,100,50,50);
  rectDown.shapeColor = "black";
  rectUp.shapeColor = "pink";
  rectUp.velocityY = -2;
  rectDown.velocityY = 2;
}

function draw() {
  background(255,255,255); 
  movingRectangle.x = mouseX;
  movingRectangle.y = mouseY;
  if (isTouching(fixedRectangle,movingRectangle)){
    fixedRectangle.shapeColor = "red";
    movingRectangle.shapeColor = "red";
  }
  else{
    fixedRectangle.shapeColor = "blue";
    movingRectangle.shapeColor = "blue";
  }
  bounceOff(rect1,rect2);
  bounceOff(rectDown,rectUp);
  
  drawSprites();
}
