let x = 0;
let y = 100;


function setup(){
    createCanvas(800,600)
}


function draw(){
    background(100);
    circle(x,y,25)
    x = x+5;
    if(x>800){
        x = 0
    }
}