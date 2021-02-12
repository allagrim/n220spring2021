let xPos = 0
let y = 200

function setup(){
  createCanvas(700,400);

}

function draw(){
  let i = 1;
  let x = 30;
  let y = 200;
  // S is size
  let s = 25;

  noStroke();

  while(i<26)
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
      rect(x-13,y-13,s+1,s+1);
    }

    //makes blue rectangle
    if(i % 3 === 0 && i % 5 === 0){
      fill(0,0,255);
      rect(x-13,y-13,s+1,s+1);
    }

    x+= 25;
    i+= 1;
  }
  
}