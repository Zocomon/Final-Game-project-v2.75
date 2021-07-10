class Asteroid{
constructor(){
    this.asteroid1image=loadImage("images/asteroid1.png")
    this.asteroid2image=loadImage("images/asteroid2.png")
    this.asteroid3image=loadImage("images/asteroid3.png")
   
}
spawn(){
    if(flag===0){

    
    if(frameCount%60 === 0){
        this.asteroid = createSprite(random(0,windowWidth),20)
this.asteroid.velocityY=4;
    if(this.asteroid.x>windowWidth/2){
        this.asteroid.velocityX = random(-1,-5)
    }
    else if(this.asteroid.x<windowWidth/2){
        this.asteroid.velocityX= random(1,5)
    }
    else {this.asteroid.velocityX=0;}

    rand1=Math.round(random(1,2))
    switch(rand1){
        case 1 : this.asteroid.addImage(this.asteroid1image)
        this.asteroid.scale = 0.35;
        asteroidsmallGroup.add(this.asteroid)
        break;
        case 2 : this.asteroid.addImage(this.asteroid2image)
        this.asteroid.scale = 0.7;
        asteroidmediumGroup.add(this.asteroid)
        break;

    }
    this.asteroid.lifetime=300;
}
    
    
}
else if(flag===1){
    flag=2;
    this.asteroidTitan = createSprite(windowWidth/2,25)
    this.asteroidTitan.addImage(asteroidTitanimage)
   // this.asteroidTitan.scale=0.6;
    this.asteroidTitan.visible=false;
    asteroidsmallGroup.destroyEach();
    asteroidmediumGroup.destroyEach();
this.asteroidTitan.visible=true;
  this.asteroidTitan.velocityY= 0.5;
  
}
else if(flag===2){
this.asteroidTitan.scale=this.asteroidTitan.scale+0.2;
}
}













}