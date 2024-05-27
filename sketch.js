function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw() {
    stroke("blue");
    fill("orange");
    
  
    
    if(mouseIsPressed){
      rect(mouseX,mouseY,20,25)
    }  
    
  }