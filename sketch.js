
//TOM AND JERRY CHASE WITH COLLISION DETECTION algorithm and writing functions with arguments

// creating 2 boxes
var box1,box2;
var box1_img,box2_img;
var box11_img,box22_img,box111_img;
var background1_img,background2_img, background3_img ,background4_img,background5_img,background6_img,background7_img
, background8_img ,background9_img ,background10_img,background11_img
var  spike_img ,tom_img,tom2_img


function preload(){

  box1_img = loadImage("tom110.png");
  box2_img = loadImage("jerry0.png")
  box11_img = loadImage("sleepingtom.jpeg")
  box22_img = loadImage("sleeping jerry0.png")
  box111_img = loadImage("happytom.png")
  background1_img = loadImage("background day.jpg")
  background2_img = loadImage("believe in yourself.jpg")
  background3_img = loadImage("chocolate world.jpg")
  background4_img = loadImage("dare to be different.png")
  background5_img = loadImage("disney.jpg")
  background6_img = loadImage("dream it.jpg")
  background7_img = loadImage("garden.jpg")
  background8_img = loadImage("night.jpg")
  spike_img = loadImage("spike.jpg")
  background9_img = loadImage("spike house.jpg")
  background10_img = loadImage("switzerland.jpg")
  background11_img = loadImage("tom and jerry home.jpg")
  tom_img = loadImage("tom cat.jpeg")
  tom2_img = loadImage("tom catch.jpg")
}


// setting up the code
function setup(){
  createCanvas(600,600);
  box1 = createSprite(200,200,70,70);
  box1.addImage("img",box1_img);
  box2 = createSprite(200,300,100,100);
  box2.addImage("img",box2_img);
  box2.addImage("img",box22_img);
  box1.scale=0.5;
  box2.scale=0.5;
 
  
}


function draw(){
  background(0);
  // movig the box with mouse
   box1.x = World.mouseX;
   box1.y = World.mouseY;
   
   
 if(isColliding(box1,box2)){
  //box1.shapeColor= color(random(255),random(255),random(255));
 // box2.shapeColor = color(random(255),random(255),random(255));
   box1.changeImage(box1_img)
   box2.destroy();
   box2 = createSprite(Math.round(random(10,500)),Math.round(random(10,500)));
   box2.addImage("img",box2_img);
   
   
 }
   else{
    //box1.shapeColor = "black";
   // box2.shapeColor = "black";
   box1.changeImage("img",box11_img);
   box2.changeImage("img",box22_img);

   
   }

  if(box2.x<20||box2.x>450){
    box2.visible=false;
    textSize(20);
    fill("red");
    text("OHHH!!! CHASE OVER",50,200)
    text("Again move the cat to restart",50,300)
  }

   drawSprites();

}

function isColliding(object1,object2){
// collision Algorithm of 2 boxes and everytime colour changes randomnly on collision
if(object1.x-object2.x<object1.width/2+object2.width/2 
  && object2.x-object1.x<object1.width/2+object2.width/2
  && object1.y-object2.y< object1.height/2+object2.height/2
  && object2.y-object1.y< object1.height/2+object2.height/2){
  return true;
 }

 else{
   return false;
 }
 
}

