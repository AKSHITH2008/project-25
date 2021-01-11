class Paper{
   constructor(){
       var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.5
       }

       this.body=Bodies.circle(30,630,30);
       this.image=loadImage("paper.png");
       World.add(world,this.body);
       this.radius=50;
   }

   display(){
       imageMode(CENTER)
       image (this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
   }
}