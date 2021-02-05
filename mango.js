class Mango{

    constructor(x, y,r) {
      var options = {
          isStatic:true,
          restitution :0,
          friction :1
      }
      this.r = r;
      this.body = Bodies.circle(x, y, r, options);
      this.mangoImg=loadImage("js/js/mango.png")
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.mangoImg, 0, 0, this.r, this.r);
      pop();
    }}  