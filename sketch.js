var bar,pin,highlight,invisibleWall1,invisibleWall2,highlightGrp,score;



function preload()
{
  logImg = loadImage("log.png");
}
function setup() 
{
  createCanvas(800,800);
 bar =  createSprite(400, 400, 700, 20);
 bar.shapeColor = "blue";

 pin = createSprite(200,400,10,50);
 pin.shapeColor = "black";

 invisibleWall1 = createSprite(50,400,10,100);
 invisibleWall2 = createSprite(750,400,10,100);

 invisibleWall1.visible = false;
 invisibleWall2.visible = false;

  highlightGrp = new Group();

  score = 0;

  bar.addImage(logImg);
  bar.scale = 2;

}

function draw() 
{
  background("lightblue");  

  pin.bounceOff(invisibleWall1);
  pin.bounceOff(invisibleWall2);

  pin.velocity.x = 0;

  fill("black");
  textSize(30);
  text("SCORE - "+score,600,200);

  if(keyDown(LEFT_ARROW))
  {
    pin.velocity.x = -5;
  }

  if(keyDown(RIGHT_ARROW))
  {
    pin.velocity.x = 5;
  }
  
  if (highlightGrp.isTouching(pin) && keyWentDown("space"))
  {
    highlightGrp.destroyEach();
    score = score+100;
  }

  spawnHighlights();

  drawSprites();
}

function spawnHighlights()
{ 
  if (frameCount%150 == 0)
  {
    randomX = random(80,720);
    highlight = createSprite(randomX,400,20,50);
    highlight.shapeColor = "green";
    highlight.lifetime = 500;
    highlight.depth = 1;
    pin.depth = highlight.depth+1;
    highlightGrp.add(highlight);
    
  }
  
}