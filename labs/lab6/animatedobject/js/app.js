let ball={
    x:0,
    y:200,
    s:10
};





function setup(){
    createCanvas(900,900);
    noStroke();
}




function draw(){
    background(0);
    fill(255,0,0);
    circle(ball.x,ball.y,ball.s)
    ball.x += 1;
    ball.s += 1;

    console.log(ball.x);
}