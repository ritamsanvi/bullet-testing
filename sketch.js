var wall;
var bullet;
var speed;
var weight;
var thickness;

function setup(){
  createCanvas(1600,400);

  thickness= random(22,83);
  weight= random(32,52);
  speed=random(223,321);

  wall= createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color("brown");
  
  bullet= createSprite(0,200,20,19);
  bullet.velocityX=speed;

  console.log(bullet.velocityX);
}

function draw(){
 background("black");


 if(wall.x-bullet.x < (wall.width+bullet.width)/2){
  var damage= (0.5*speed*weight*speed)/(thickness*thickness*thickness);
   
  bullet.velocityX=0;

    if(damage>10){
      bullet.shapeColor=color(255,0,0);
    }

    if(damage < 10){
      bullet.shapeColor=color(0,255,0);
    }
  } 

  //function hasCollided(Lbullet,Lwall)
  //{
  // bulletRightEdge=bullet.x+bullet.width;
  // wallLeftEdge=wall.x;

  // if(bulletRightEdge>=wallLeftEdge)
  // {
   //  return true
  // }
   //  return false;
  //}

    drawSprites();
}