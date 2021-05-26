var CatWalking, cat
var Mouse, mouse, Mouse1
var Garden
function preload() {
    //load the images here
   CatWalking = loadAnimation ("images/cat2.png", "images/cat3.png")
   Mouse = loadAnimation ("images/mouse1.png")
   Garden = loadImage("images/garden.png")
   Mouse1 = loadAnimation("images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(850,700)
//cat.addAnimation("Cat",CatWalking)
cat.scale = .2
mouse = createSprite(150,700)
//mouse.addAnimation("Mouse", Mouse)
mouse.scale = .1
}

function draw() {

    background(Garden);
    //Write condition here to evalute if tom and jerry collide
if(keyDown(RIGHT_ARROW)){
    mouse.x = mouse.x + 5
}
    drawSprites();
    isTouching()
}


function keyPressed(){

  //For moving and changing animation write code here


}


function isTouching(){
    if(cat.x - mouse.x <= (cat.width + mouse.width)/2)
  {
console.log("hi")
///mouse.addAnimation("images/mouse3.png", Mouse1)
//mouse.changeAnimation("images/mouse3.png", Mouse1)
mouse.shapeColor = "white"
cat.shapeColor = "red"
  }
}
