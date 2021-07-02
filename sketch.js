var iss,issImg;
var spacecraft,spacecraftImg1,spacecraftImg2,spacecraftImg3,spacecraftImg4;
var bgImage;
var s1,s2;
var PLAY=1;
var END=0;
var gameState = PLAY;

function preload() {

  bgImage = loadImage("images/spacebg.jpg");
  issImg = loadImage("images/issfinal.png");
  spacecraftImg1 = loadImage("images/spacecraft1final.png");
  spacecraftImg2 = loadImage("images/spacecraft2final.png");
  spacecraftImg3 = loadImage("images/spacecraft3final.png");
  spacecraftImg4 = loadImage("images/spacecraft4final.png");

}

function setup() {
  createCanvas(800,400);

  iss = createSprite(400, 130, 50, 50);
  iss.addImage("iss",issImg)
  iss.scale=0.7;

  spacecraft = createSprite(400, 320, 50, 50);
  spacecraft.addImage("spacecraft",spacecraftImg1)
  spacecraft.scale=0.25;

  s1 = createSprite(338, 203, 10, 10);
  s1.shapeColor = "red";
  s1.visible = false;

  s2 = createSprite(400, 255, 10, 10);
  s2.shapeColor = "darkgreen";
  s2.visible = false;
 
}

function draw() {

  background(bgImage);  

  if(gameState === PLAY){
  
      s2.x=spacecraft.x;
      s2.y=spacecraft.y-70;
      
        if(keyDown("up_arrow") && !keyDown("left_arrow") && !keyDown("right_arrow")){
          spacecraft.addImage("spacecraft",spacecraftImg2);
          spacecraft.y=spacecraft.y-2;
        }else{
          spacecraft.addImage("spacecraft",spacecraftImg1);
        }
        if(keyDown("left_arrow")){
          spacecraft.addImage("spacecraft",spacecraftImg3);
          spacecraft.x=spacecraft.x-2;
        }
        if(keyDown("right_arrow")){
          spacecraft.addImage("spacecraft",spacecraftImg4);
          spacecraft.x=spacecraft.x+2;
        }
        if(s2.x > 334 && s2.x < 344){
          if(s2.isTouching(s1)){
            fill("yellow");
            text ("docking successful",400,380);
            gameState = END;
          }
        }
        if(spacecraft.x < 370 && spacecraft.y > 200){
         spacecraft.depth = iss.depth;
         iss.depth = iss.depth + 1;
        }else{
          iss.depth = spacecraft.depth;
          spacecraft.depth = spacecraft.depth + 1;
        }
  }
    
  if(gameState === END){
        spacecraft.addImage("spacecraft",spacecraftImg1);
      if(keyDown("down_arrow")){
        spacecraft.y=spacecraft.y-0;
      }
      if(keyDown("left_arrow")){
        spacecraft.x=spacecraft.x-0;
      }
      if(keyDown("right_arrow")){
        spacecraft.x=spacecraft.x+0;
      }
      fill("yellow");
      text ("docking successful",400,380);
  }
  drawSprites();
}