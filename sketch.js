var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var redBubbleGroup, redBubbleGroup, bulletGroup;

var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 800);
  

  heading = createElement("h1");
  scoreboard = createElement("h1")


  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  
  
}

function draw() {
  background("#BDA297");

  //display Score and number of lifes

  scoreboard.html("Score:"+score)
  scoreboard.style('color:red')
  scoreboard.position(width-200,20);


  if(gameState===1){
    gun.y=mouseY  



     if (keyDown("space")) {
      shootBullet()
     }

     if(frameCount%80===0) {
      blueBubble()
     }



     if(frameCount%100===0) {
      redBubble()
     }
   
    

     
       if(blueBubbleGroup.collide(bulletGroup)) {
        handleBubbleCollision(blueBubbleGroup)
       }

       if(redBubbleGroup.collide(bulletGroup)) {
        handleBubbleCollision(redBubbleGroup)
       }
     
     
       if(blueBubbleGroup.collide(backBoard)) {
       handleGameOver(blueBubbleGroup)
       }

       if(redBubbleGroup.collide(backBoard)) {
        handleGameOver(redBubbleGroup)
       }
    

    
    drawSprites();
  }
     
}


  function shootBullet() {

    bullet = createSprite(160,400,30,20)
    bullet.addImage("dfghj",bulletImg)
    bullet.scale=0.1
    bullet.y=gun.y-34
    bullet.velocityX=5
    bulletGroup.add(bullet)

}


  function  blueBubble() {
    bubble = createSprite(800,random(20,780),40,30);
    bubble.velocityX=-4
    bubble.lifetime=200
    bubble.addImage("gfhy",blueBubbleImg);
    bubble.scale=0.07
    blueBubbleGroup.add(bubble)
    }


    function  redBubble() {
      bubble1 = createSprite(800,random(20,780),40,30);
      bubble1.velocityX=-4
      bubble1.lifetime=200
      bubble1.addImage("gfhy",redBubbleImg);
      bubble1.scale=0.07
      redBubbleGroup.add(bubble1)
      }
   



   function handleBubbleCollision(bubbleGroup) {
     if(life >0)
     score=score+1
     var car=createSprite(bullet.x,bullet.y)
     car.addImage("dfghj",blastImg)
     car.lifetime=20
     car.scale=0.05
     bulletGroup.destroyEach()
     bubbleGroup.destroyEach()

   }


    function handleGameOver(bubbleGroup) {
      life=life-1
      bubbleGroup.destroyEach()

      if(life===0) {
        gameState=2;


      swal ({
        title: `Game Over`,
        text : "oops you lost the game ...........you fool ................!!!!!!!!!!!" ,
        text : "Your Score is" + score,
        imageUrl:"https://www.smileysapp.com/emojis/weeping-emoji.png",
        imageSize:"100x100",
        confirmButtonText:"Thanks for Playing",

      })

      }
    } 




  


