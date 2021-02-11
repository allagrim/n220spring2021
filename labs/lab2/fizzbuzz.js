let xPos = 0
let y = 200

function setup(){
  createCanvas(700,400);

}

function draw(){
  let i = 0;
  let x = 30;
  let y = 200;
  // S is size
  let s = 25;

  while(i<25)
  {

    //makes Black circle
    fill(0,0,0);
    circle(x,y,s);
    //makes purple circle
    if(i % 3 === 0){
      fill(128,0,128);
      circle(x,y,s);
    }
    //makes green rectangle
    if(i % 5 === 0){
      fill(0,255,0);
      rect(x-14,y-12,s,s);
    }

    //makes blue rectangle
    if(i % 3 === 0 && i % 5 === 0){
      fill(0,0,255);
      rect(x-14,y-12,s,s);
    }

  
    
    x+= 25;
    i+= 1;
  }
  //Removes first blue square that I have no idea how it got there.
  fill(255,255,255);
  stroke(255,255,255);
  rect(16,200-12,s,s);
}