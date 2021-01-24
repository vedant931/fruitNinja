//adding gameststes
var PLAY=1;
var END=0;
var gameState=1;


//adding sword, fruits and score
var sword,fruit1,fruit2,fruit3,fruit4,monster,monster2;
var swordImage,monsterImage,gameoverImage;
var fruitGroup,enemyGroup;
var gameover;
var score=0;


function preload() {
  
  //loading all images
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monsterImage1 = loadImage("alien1.png");
  monsterImage2 = loadImage("alien2.png");
  swordImage = loadImage("sword.png");
  gameoverImage = loadImage("gameover.png")
  
}


function setup() {
  
  
  //creating a place to play the game
  createCanvas(600,600);
  
  //creating the sword and groups for fruits and aliens
  sword = createSprite(100,200,20,20);  
  sword.scale=0.72;
  sword.addImage(swordImage);
  fruitGroup = new Group();
  enemyGroup = new Group();
  
}


function draw() {
  
  //adding a nice background
  background("lightBlue");
  
  
  //adding an if statement for both gamestates
  if(gameState === PLAY){
 
    //calling function Enimies and fruits
    Enemies();
    fruits();
     
  //making sword move with mouse pointer
  sword.y=World.mouseY;
  sword.x=World.mouseX;   
     
    
    //destroy fruits if sword touches t
   if(fruitGroup.isTouching(sword)) {
    fruitGroup.destroyEach();
    score=score+5;
   }
     
     else if(enemyGroup.isTouching(sword)) {
      
       //end the game if sword touches an enemy
      gameState = END;
    
      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
      fruitGroup.velocityX=0;
      enemyGroup.velocityX=0;
      sword.addImage(gameoverImage);
      sword.scale=1.5;
      sword.x=300;
      sword.y=300;

    }
    
  }
  
  //making the sprites appear
  drawSprites();
  
  //adding the score text
  text("Score : " + score,500,50);
  console.log(score);
  
}


function fruits() {

  //adding a random fruit
  if(World.frameCount%80===0){ 
   fruit=createSprite(600,200,20,20);
   fruit.scale=0.2;
   
    r=Math.round(random(1,4)); 

     if(r == 1) {
      fruit.addImage(fruit1);
     } 
     else if (r == 2){
      fruit.addImage(fruit2)
     } 
     else if (r == 3){
      fruit.addImage(fruit3)
     } 
     else if (r == 4){
      fruit.addImage(fruit4)
     }

     fruit.y=Math.round(random(50,340));
     fruit.velocityX=-9;
     fruit.setlifetime=200;

     fruitGroup.add(fruit);
  }
  
}
  

function Enemies() {
  
   if(World.frameCount%200 === 0) { 
     
     monster=createSprite(600,200,20,20);
     monster.addImage("moving", monsterImage1);
     monster.y=Math.round(random(25,275)); 
     monster.velocityX=-10;
     monster.setlifetime=50;

     enemyGroup.add(monster);  

   }
  
   if(World.frameCount%200 === 0) {
     
     monster2=createSprite(800,200,20,20);
     monster2.addImage("moving2", monsterImage2);
     monster2.y=Math.round(random(325,575));
     monster2.velocityX=-10;
     monster2.setlifetime=50;

     enemyGroup.add(monster2);
     
   }
   
}