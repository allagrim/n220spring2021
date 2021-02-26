function setup(){
    createCanvas(1000,800);
    
}


function drawBall(xPos, yPos){
    fill("#FF0000");
    stroke("#ff9900");
    //makes the rectangle red and the lines orange
    for(var i = 0; i < 50;i++) {
        line(xPos,yPos, i* 50,800)
        line(xPos,yPos, i* 100,800)
        line(xPos,yPos, i* 20,800)
        line(xPos,yPos, i* -50,800)
        line(xPos,yPos, i* -100,800)
        //All lines are there to make the wall and floor affect
    }


    rect(xPos-50,yPos-50,100,100);
    //makes the rectangle center on the cursor and draw on the cursor
}


function draw(){
    background(100);
    drawBall(mouseX, mouseY);
    //was originally a ball but is now not a ball
}











