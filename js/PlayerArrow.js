class PlayerArrow{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            restitution:0.8,
            friction:1.0,
            density:1.0            
        };

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/arrow.png");

    World.add(world,this.body);
    }
    
shoot()
{
    if (keyDown(space)){
        arrow.shoot(playerArcher.body.angle);
    }
}


display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push()
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);

    pop();
    
}

}


