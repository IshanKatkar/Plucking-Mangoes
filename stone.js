class Stone{

    constructor(x, y, r) {
      var options = {
          isStatic:false,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.r = r;
      this.body = Bodies.circle(x, y, r , options);
      this.stoneImg=loadImage("js/js/stone.png")
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.stoneImg, 0, 0, this.r,this.r);
      pop();
    }}  