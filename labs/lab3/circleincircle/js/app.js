
let i = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  let size = 500
  while(i < 100)
  {
    
    
    size -= 5;
    circle(200,200,size);
    
    i += 1;
    console.log(size);
  }
  
}