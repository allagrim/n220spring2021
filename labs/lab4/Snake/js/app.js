function setup(){
    createCanvas(600,600);
    
}


let xPos = [0,0,0,0,0,0,0,0,0,0];
//All of the x positions of the 10 circles
let yPos = [0,0,0,0,0,0,0,0,0,0];

let s = 5
function snek(){
    fill(0,0,0);

    let phx = mouseX
    let phy = mouseY

    xPos[0] = phx
    yPos[0] = phy
    
    console.log(xPos[0]);


    circle(xPos[0],yPos[0],s)



}