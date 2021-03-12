let ball={
    x:450,
    y:450,
    s:10
};

let i = 1;



function setup(){
    createCanvas(900,900);
    noStroke();
}

function draw(){
    background(0);
    fill(255,0,0);
    //All 3 circles based on object ball
    circle(ball.x,ball.y,ball.s);
    fill(0,0,255);
    circle(ball.x,ball.y,ball.s-200);
    fill(125,0,125);
    circle(ball.x,ball.y,ball.s-100);

    //lets ball grow and then "hopefully" shrink back down
    ball.s += 1;
    if(ball.s == 300){
        ball.s = 0;
    }
    console.log(ball.s);
}