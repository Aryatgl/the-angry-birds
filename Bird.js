class Bird extends BaseClass {
  constructor(x,y,count){
    super(x,y,50,50);
    
    if(count=1){
      this.image = loadImage("sprites/bird.png");
    }else if(count=2){
      this.image=loadImage("sprites/blu.png");
    }else if(count=3){
      this.image=loadImage("sprites/chuck.png");
    }else if(count=4){
      this.image=loadImage("sprites/bomb.png");
    }else if(count=5){
      this.image=loadImage("sprites/eggy.png");
    }
   
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
