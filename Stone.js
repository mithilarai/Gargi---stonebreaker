class Stone{
    constructor(x,y,radius){
        var options = {friction:0.2,restitution:0.5}
        this.body = Bodies.circle(x,y,radius/1.3,options);
        this.image = loadImage("stone.png");
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
      
    imageMode(CENTER);
     image(this.image,pos.x,pos.y,this.radius,this.radius);
      // ellipse(this.image,pos.x,pos.y,this.radius/2,this.radius/4);
   
    }

    
}