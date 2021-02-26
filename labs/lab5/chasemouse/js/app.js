function setup(){
    createCanvas(600,600);
    background(100);
}

circleX = 10;
circleY = 10;
//Defines the circle positions and where it starts
xSpeed = 2;
ySpeed = 2;

rectX = 400;
rectY = 500;
rectW = 200;
rectH = 100;

function draw(){
    background(100);
    noStroke();

    //Drawing, and moving the circle
    fill("#0008ff")
    circle(circleX, circleY, 50);
    circleX= circleX + xSpeed;
    circleY = circleY + ySpeed;
    

    //Drawing the rectangle
    fill("#ff0040")
    rect(rectX,rectY,rectW,rectH);

    if(collideRect(circleX+10,circleY,rectX,rectY,rectW,rectH) == true){
        ySpeed = -ySpeed;
    }
    
    
   
    
}





function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

    var colliding = false;

    if(circleX > rectX && circleX < rectX + rectW) {

        if(circleY > rectY && circleY < rectY + rectH) {

              return true;

        }

   }

   return false;
   
}


