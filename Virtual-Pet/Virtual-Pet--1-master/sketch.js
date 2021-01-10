var dog ;
var happydog;
var database;
var foodS;
 var foodStock

function preload()
{
  
dogimg=loadImage("images/dogimg.png")
happydog=loadImage("images/dogimg1.png")


}

function setup() {
	createCanvas(500,500);
  
 dog=createSprite(width/2,80,10,10)
 dog.addImage(dogimg)

foodStock=database.ref('Food');
foodStock.on("value",readStock);

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x) {
  database.ref('/').update({
  Food:x
})
 
if(x<0===0){
  foodS=0
}
else{
foodS=x-1;
}




  }
  

function draw() {  

  background(46,139,87);

if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(happydog)
}





  drawSprites();
  text(pressUP_ARROWtofeeddogmilk)

}



