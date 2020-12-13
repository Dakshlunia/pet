//Create variables here
var dog,dogHappy,database,foodS,foodStock;
function preload()
{
	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog =createSprite(250,250,50,50);
  dog=loadImage("images/dogimg.png");
  database = firebase.database();
  foodStock.database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87)
  if( keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);



    dog.display();
    foodStock.display();
  }
  
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}
