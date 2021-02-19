function setup(){
    createCanvas(300,300);
}

let i = 0;
let y = [0];
let x = [0];
//location of water drops


//let x = random([0],[150]);


function draw(){
    background(255);
    noStroke();
    fill("#00FFFF");

    if(frameCount % 10 == 0) {
        y.push(0);
        x.push(random([0],[300])) 
    }  

    for(let i = 0; i < y.length; i++) {
        circle(x[i], y[i], 30);
        y[i] = y[i] + 5;
    }
    
    

    

}





