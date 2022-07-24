    var PLAY = 1;
    var END = 0;
    var gameState = PLAY;

    var rocket,rocketflying,rocketleft,rocketright,rocketdown;
    var star,star2;
    var score;

    function preload(){
    rocketflying = loadImage("rocket4.0.png")
    rocketright = loadImage("rocket2.0.png")
    rocketleft = loadImage("rocket3.0.png")
    rocketdown = loadImage("rocket5.0png")
    star2 = loadImage("star.png")
  }

  function setup() {
    createCanvas(500, 500);
  rocket = createSprite(250,250,20,20);
  star = createSprite(300,300,10,10);
  rocket.addImage("rocketFlying",rocketflying)
  rocket.addImage("rocketLeft",rocketright)
  rocket.addImage("rocketRight",rocketleft)
  rocket.addImage("rocketDown",rocketdown)
  rocket.scale=0.2
  star.addImage(star2)
  star.scale=0.1
  }

  function draw() {
    background("purple") 
  
    if(keyDown("LEFT_ARROW")){
        rocket.x = rocket.x - 3;
    rocket.changeImage("rocketLeft",rocketleft)    
    }
    if(keyDown("RIGHT_ARROW")){
    rocket.x = rocket.x + 3;
    rocket.changeImage("rocketRight",rocketright)
      
    }
    if(keyDown("UP_ARROW")){
        rocket.y = rocket.y -3;
        rocket.changeImage("rocketFlying",rocketflying)
    }
    if(keyDown("DOWN_ARROW")){
        rocket.y = rocket.y +3;
        rocket.changeImage("rocketDown",rocketdown)
    }
    
    drawSprites();
    }
    function spawnstars(){
      if (frameCount % 60 === 0) {
        star.y = Math.round(random(10,60));
        star.addImage(star2);
        star.scale = 0.1;
        star.velocityX = -3;
       } 
    }