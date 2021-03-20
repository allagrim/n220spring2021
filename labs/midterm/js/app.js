let size = 10
let color = ["#ffffff","#ffdbfd","#ffbdfb","#ff99f9","#ff78f7","#ff57f5","#bd00b1"];
var i = 0;
let y = []
let x = []
let q = 0;
function setup() {
  createCanvas(900, 900);
}

function draw() {
    background(0);
    fill(color[i]);
    y.push(mouseY);
    x.push(mouseX);
    circle(x[q],y[q],size);
    position();
    for(let q = 0; q < y.length; q++) {
        
        circle(x[q], y[q], size);
        
    }
    
  



   
  

    
  
}


function position(){
    
    if(mouseX <=650){
        size=15;
        i=0
    }
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




function mousePressed(){
    
    for(let i = 0; i < y.length; i++) {
        y[i] = 900;
    }

}

function mouseReleased(){
    for(let i = 0; i < y.length; i++) {
        y[i] = mouseY;
    }
}
