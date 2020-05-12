var obstacle,a1,a2,a3,a4,a5,a6,r,groupofobs,clouds,cloudy,groupofcs;

function obstacles(){
if(frameCount%60==0){

obstacle=createSprite(Math.round(random(800,1200)),330,10,10)

if(gameState=="play"){

obstacle.velocityX=numb

}

r=Math.round(random(1,6))


switch (r){

case 1:obstacle.addImage(a1);
break;
case 2:obstacle.addImage(a2);
break;
case 3:obstacle.addImage(a3);
break;
case 4:obstacle.addImage(a4);
break;
case 5:obstacle.addImage(a5)
break;
case 6:obstacle.addImage(a6)

}


obstacle.scale=0.6

groupofobs.add(obstacle)

}

}

function cloud(){

if(frameCount%45==0){

cloudy=createSprite(Math.round(random(800,1200)),Math.round(random(40,200)),10,10)

cloudy.addImage(clouds)

    if(gameState=="play"){

     cloudy.velocityX=-10

    }

groupofcs.add(cloudy)

}

}
