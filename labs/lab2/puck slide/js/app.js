function setup(){
    createCanvas(400,300);
}


function draw(){
    let i = 0;
    background(100);
    circle(mouseX,mouseY,25)
    if(mouseX < 200){
        fill("#0000FF")
    }
    if(mouseX > 200){
        fill("#FF0000")
    }
}