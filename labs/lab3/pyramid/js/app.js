function setup(){
    createCanvas(700,400);
}
  
let r = 9;  
//r is the amount of rows  
  
function draw(){
  noStroke();

  for ( var rows = 0; rows <= r; rows++){
      for (var columns = 0; columns <= rows; columns ++){
          fill(255,0,0);
          square(columns * 45, rows * 45, 42);
      }
  }
}