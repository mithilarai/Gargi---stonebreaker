class Hammer{
constructor(x,y,width,height){
    var options = {density:2};
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.image = loadImage("hammer.PNG");
    this.width =width;
    this.height = height;
    World.add(world,this.body);
}

display(){
    var pos = this.body.position;
 imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width,this.height);
//rect(this.image,pos.x,pos.y,this.width,this.height);

}

}