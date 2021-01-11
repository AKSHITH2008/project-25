class Dustbin{
    constructor(x,y,width,height,angle){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        Matter.Body.setAngle(this.body,angle);
        this.image=loadImage("dustbingreen.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
       
       
        imageMode(CENTER)
        image (this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}