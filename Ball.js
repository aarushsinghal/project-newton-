class Ball{
    constructor(x,y){
        super(x,y,50,50);
        
      }
    
      display() {
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        if(this.body.position.x>200 && this.body.velocity.x>10){
          var position = [this.body.position.x,this.body.position.y]
        
        }
        super.display;
}
}