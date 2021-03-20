let size = 10
//this variable is the starting point for the circle size, it will never get down past 15 while the code is running.
let color = ["#ffffff","#ffdbfd","#ffbdfb","#ff99f9","#ff78f7","#ff57f5","#bd00b1"];
//color is being called in function position for the color of the circle.
var i = 0;

let y = []
let x = []
//these two arrays allow for the snake to be drawn
let q = 0;
//this is used only for the for loop in the draw command (* for reference)
function setup() {
  createCanvas(900, 900);
}

function draw() {
    background(0);
    //this fill is set with function position
    fill(color[i]);

    y.push(mouseY);
    x.push(mouseX);

    circle(x[q],y[q],size);
    //this function is finding where the pointer is and what size and color to assign it, (~ for reference)
    position();
    //*
    for(let q = 0; q < y.length; q++) {
        circle(x[q], y[q], size);
        //To let the circle be drawn with an array
    }
    
  



   
  

    
  
}

//~
function position(){
    
    if(mouseX <=650){
        size=15;
        i=0
    }
    //all but 2 if statements are checking to see if the pointer is in between two points, the top and bottom if statements are checking to see if it exceeds them.
    if(mouseX >=625 && mouseX <=650){
        size=20;
        i=1
    }
    if(mouseX >=600 && mouseX <=625){
        size=25;
        i=2
    }
    if(mouseX >= 575 && mouseX <=600){
        size=30;
        i=3
    }
    if(mouseX >= 550 && mouseX <=575){
        size=35;
        i=4
    }
    if(mouseX > 525 && mouseX <= 550){
        size=40;
        i=5
    }
    if(mouseX >= 350 && mouseX <= 525){
        size=45;
        i=6
    }
    if(mouseX >=325 && mouseX <= 350){
        size=40;
        i=5
    }
    if(mouseX >= 300 && mouseX <= 325){
        size=35;
        i=4
    }
    if(mouseX >= 275 && mouseX <= 300){
        size=30;
        i=3
    }
    if(mouseX >= 250 && mouseX <= 275){
        size=25;
        i=2
    }
    if(mouseX >= 225 && mouseX <= 250){
        size=20;
        i=1
    }
    if(mouseX <=225){
        size=15;
        i=0
    }
}



//This function checks to see if mouse is pressed and is "supposed" to animate it down
function mousePressed(){
    
    for(let i = 0; i < y.length; i++) {
        //this sets all points in the y array to 900 because I ran out of time to animate it
        y[i] = 900;
    }

}
//This function checks to see if mouse is released and returns the snake back up to the pointer
function mouseReleased(){
    for(let i = 0; i < y.length; i++) {
        //this sets all points in the y array back to the pointer
        y[i] = mouseY;
    }
}
