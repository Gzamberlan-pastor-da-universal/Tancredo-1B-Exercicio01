function setup() {
  createCanvas(800,800);
  background("cyan");
}

function draw() {
  
  fill("brown");
  stroke("silver");
  
  
  if(mouseIsPressed){
    rect(mouseX,mouseY,65,65)
  }
  
  
}
