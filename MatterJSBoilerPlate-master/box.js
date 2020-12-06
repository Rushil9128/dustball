class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.image=loadImage("dustbingreen.png");
    }
    display(){
        var pos = this.body.position;
        fill("red");
        

    }
}