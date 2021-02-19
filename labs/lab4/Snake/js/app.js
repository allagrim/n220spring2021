let color = ["#ff0000","#ffa500","#ffff00","#008000","#0000ff","#4b0082","#ee82ee"];
//Rainbow colors
var i = 0;
function setup(){
    createCanvas(2500,900);
    background(0);
}






function draw(){
  noStroke();
  
  background(0);
    circle(mouseX,mouseY,100); 

    //make i change to make the color change
    //when framecount = 60 i adds 1
    if(frameCount % 15 == 0){ 
        //Makes i change, and as such the color changes
        i = i + 1;
        fill(color[i]);
        console.log(frameCount);
        //Makes i reset to 0 based off of the length of the array colors
        if(i == color.length-1){
            i = 0;
        }
    }
}