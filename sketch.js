var barco, barco_running,barcocollide;
var	fondo, fondoImage;



function preload(){

  fondoImage = loadImage ("sea.png");
  barco_running = loadAnimation ("ship-1.png","ship-2.png","ship-4.png");


}

function setup(){
  createCanvas(600,500);

  fondo = createSprite(100,200,400,220);
  fondo.addImage("fondo", fondoImage);
  fondo.x= fondo.width /2;
  fondo. velocityX= -4;

  
  barco= createSprite(50,160,20,50);
  barco. addAnimation("running",barco_running);

  barco.scale=0.3;
  barco.x= 200;
  barco.y= 300;

}

function draw() {
  background("white");
 
  fondo.velocityX=-2;
  if(fondo.x <0){
    fondo.x = fondo.width/2
   }


    
 drawSprites();
}