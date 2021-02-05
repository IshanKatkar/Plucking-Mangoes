class Tree{

constructor(x, y, width, height, angle) {
  var options = {
      isStatic:true
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  this.treeImg=loadImage("js/js/tree.png")
  World.add(world, this.body);
}
display(){
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.treeImg, 0, 0, this.width, this.height);
  pop();
}}  