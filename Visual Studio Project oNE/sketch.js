var a,img,trex,jump,ground,move,realground,collision,gameState,death,numb;

function preload(){
img=loadImage("mariosprite.png")

a1=loadImage("obstacle1.png")
a2=loadImage("obstacle2.png")
a3=loadImage("obstacle3.png")
a4=loadImage("obstacle4.png")
a5=loadImage("obstacle5.png")
a6=loadImage("obstacle6.png")

groupofcs=new Group()

clouds=loadImage("cloud.png")

death=loadSound("die.mp3")

gameState="notStarted"

groupofobs=new Group()

collision=loadImage("trex_collided.png")

jump=loadSound("jump.mp3")

trex=loadAnimation("trex1.png","trex3.png","trex4.png")

move=loadImage("ground2.png")

}

function setup() {
  createCanvas(800,400);
  frameRate(100)


   a=createSprite(80, 240, 50, 50);
   a.addAnimation("trex",trex)
   a.scale=0.6
   a.addAnimation("collide",collision)

   realground=createSprite(400,358,800,10)
   realground.visible=false

   ground=createSprite(400,350,800,10)
   ground.addImage(move)

   numb=-10
}


function draw() {

  if(gameState=="notStarted"){

  a.pause()

  }



  if(keyDown("space")&&gameState=="notStarted"){

  gameState="play"

  a.play()

  }

  background(255,255,255); 

  a.collide(realground)

  if(ground.x<0){
    ground.x=ground.width/2
  }

  if(keyWentDown("space")&& a.y>280 && gameState=="play"){
    
    a.velocityY=-15
    jump.play()

  }

  if(a.isTouching(groupofobs)&&gameState=="play"){

       a.changeAnimation("collide",collision)

       ground.velocityX=0

       groupofobs.setVelocityXEach(0)

       groupofcs.setVelocityXEach(0)

       gameState="stop"

       death.play()


  }
  
  obstacles()

  cloud()

 if(gameState=="play"){

      ground.velocityX=numb

 }

 if(frameCount%500==0){
   numb=numb-1
 }

  a.velocityY=a.velocityY+0.8

  drawSprites();
}