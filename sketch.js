
var hasDocked = false
function preload(){
  issImg = loadImage("dockingImage/iss.png")
  spaceImg = loadImage("dockingImage/spacebg.jpg")
  sc1Img = loadImage("dockingImage/spacecraft1.png")
  sc2Img = loadImage("dockingImage/spacecraft2.png")
  sc3Img = loadImage("dockingImage/spacecraft3.png")
  sc4Img = loadImage("dockingImage/spacecraft4.png")
}

function setup() {
  createCanvas(600,350);
  spaceCraft = createSprite(285, 240);
  spaceCraft.addImage("sp1",sc1Img)
  spaceCraft.scale = 0.15
  iss = createSprite(330, 130);
  iss.addImage("iss",issImg)
  iss.scale = 0.25
}

function draw() {
  background(spaceImg)
  spaceCraft.addImage("sp1",sc1Img)
  if(!hasDocked){
    spaceCraft.x = spaceCraft.x + random(-1,1)
    if(keyDown("UP_ARROW")){
      spaceCraft.y = spaceCraft.y-2
    }
    if(keyDown("DOWN_ARROW")){
      spaceCraft.addImage("sp1",sc2Img)
    }
    if(keyDown("LEFT_ARROW")){
      spaceCraft.x = spaceCraft.x-2
      spaceCraft.addImage("sp1",sc4Img)
    }
    if(keyDown("RIGHT_ARROW")){
      spaceCraft.x = spaceCraft.x+2
      spaceCraft.addImage("sp1",sc3Img)
    }
  }
  if(spaceCraft.y <= (iss.y+60)&& spaceCraft.x<= (iss.x-10)){
    hasDocked = true
    textSize (25)
    fill ("white")
    text("DOCKING SUCCESSFUL!!",200,300)
  }
  drawSprites();
}