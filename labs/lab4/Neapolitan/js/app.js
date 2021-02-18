function setup(){
    createCanvas(600,600);

}

let iceCream = [ "#FFB6C1", "#F3E5AB", "#d2691e"];
//Strawberry, vanilla, chocolate in that order


function draw(){
    
    let x = 0
    //Y coordinate

    for( var i = 0; i <= 2; i++){
        noStroke();
        fill(iceCream[i])
        console.log(iceCream[i])
        rect(x,0,200,600);


        x+= 200;
    }

}

