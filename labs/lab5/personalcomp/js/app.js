function setup(){
    createCanvas(1000,800);
    
}


function drawBall(xPos, yPos){
    fill("#FF0000");
    stroke("#ff9900");

    for(var i = 0; i < 50;i++) {
        line(xPos,yPos, i* 50,800)
        line(xPos,yPos, i* 100,800)
        line(xPos,yPos, i* 20,800)
        line(xPos,yPos, i* -50,800)
        line(xPos,yPos, i* -100,800)
    }


    rect(xPos-50,yPos-50,100,100);

}


function draw(){
    background(100);
    drawBall(mouseX, mouseY);
}











