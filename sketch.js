var foodStock = 25;
var canvas;
var dog, dogIMG;
function preload()
{
dogIMG = loadImage("images/dogImg.png");
}

function setup() {
	canvas = createCanvas(800, 700);
dog = createSprite(200,200,20,20);
dog.addImage(dogIMG);
dog.scale = 0.3;
}


function draw() {  
text("foodstock:" + foodStock, 100,400);
if(keyWentDown(UP_ARROW)){
  foodStock = foodStock - 1;
}
  drawSprites();


}



