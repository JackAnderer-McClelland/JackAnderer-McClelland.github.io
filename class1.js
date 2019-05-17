class Bubble {
 	constructor() {
   this.x = random(400);
   this.y = random(400);
   this.xspeed = 6;
   this.yspeed = 6;
   this.size = 25;
   this.width = width;
   this.height = height;
	}
  normal() {
    this.xspeed = 6;
    this.yspeed = 6;
  }
  hard() {
    this.xspeed = 9;
    this.yspeed = 9;
  }
  expert() {
    this.xspeed = 11;
    this.yspeed = 11;
  }
  legendary() {
    this.xspeed = 13.5;
    this.yspeed = 13.5;
  }
  divine() {
    this.xspeed = 14.5;
    this.yspeed = 14.5;
  }
  
  slowd() {
    this.xspeed = 2;
    this.yspeed = 2;
  }
  lmao() {
    this.xspeed = 20;
    this.yspeed = 20;
  }
  clicked(x = mouseX, y = mouseY) {
    let d = dist(x, y, this.x, this.y);
    if(d <= this.size) {
      t += 1
      sound.play()
      
   }
  }
  newvl() {
    this.x = random(400)
    this.y = random(400)
  }
  move() {
    this.x += this.xspeed
    this.y += this.yspeed
  }
  
  values(){
  if (this.x > this.width || this.x < 0) {
   this.xspeed = this.xspeed * -1
  }
  if (this.y > this.height || this.y < 0) {
    this.yspeed = this.yspeed * -1
  }  
}
  
  draw(){
    stroke(255);
    strokeWeight(4);
    fill(220);
    ellipse(this.x, this.y, this.size, this.size)
    
  }
}
