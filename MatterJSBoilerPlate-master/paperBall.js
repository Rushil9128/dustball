class Ball{
    constructor(x,y,r){
        var options=
        {
            'restitution':0.3,
            'isStatic':false,
            'friction':0.5,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(x,y,this.r,options);
        this.image=loadImage("paper.png");
        World.add(world,this.body);
     
    }

    display(){
        var pos = this.body.position;
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("red");
        stroke("red");
        strokeWeight(2);
        imageMode(CENTER);
        image(this.image,0,0,70,70);
    }
}