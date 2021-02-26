function setup(){
    createCanvas(600,600);

}

let lightcolors = [ "#FF0000", "#FFFF00", "#008000"];
//Red, Yellow, Green in that order


function draw(){
    let y = 100
    let x = 100
    //Y coordinate
    //X coordinate

    for( var i = 0; i <= 2; i++){
        stroke("#000000")
        strokeWeight(10);
        fill(lightcolors[i])
        ellipse(x,y,100,100);

        //Makes the circle go down more each loop
        y+= 100;
    }

}

