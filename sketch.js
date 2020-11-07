var fixedRect, movingRect;

function setup() {
  createCanvas(1920,1080);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="Cyan"
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor="LawnGreen"
  
}

function draw() {
  background(255,0,0);  
  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  console.log(movingRect.x-fixedRect.x);

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor="Black"
    movingRect.shapeColor="Black"
  }
  else{
    movingRect.shapeColor="White"
    fixedRect.shapeColor="White"

  }
  drawSprites();
}