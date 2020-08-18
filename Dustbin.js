class Dustbin {
  constructor(x, y, width, height) {
    var options = {
        //'restitution':0.2,
        //'friction':0.2,
        //'density':1.0
        
        //this.body = Bodies.rectangle(restitution:0.2,{isStatic:true});
    }
    this.image = loadImage("Dustbin.png");
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    this.body = Bodies.rectangle(x, y, width , height,{isStatic:true} );
    
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    //var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    //rotate(angle);
   // rectMode(CENTER);
    //fill(255);
   // strokeWeight(3);
    //stroke(255);
   // rect(pos.x, pos.y, this.width, this.height);
   imageMode(CENTER);
   image(this.image,0,0,this.width,this.height); 
   pop();
  }
};