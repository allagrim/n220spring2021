
//The rectangle that is being drawn
var myRectangle = {
    rx: 150,
    ry: 100,
    rw: 150,
    rh: 100,
    color: [200, 64.7, 0],
    update: function() {
        rect(this.rx, this.ry, this.rw, this.rh)
        fill(this.color)
    }
}

function setup() {
    createCanvas(900, 900);
    noStroke();
    background(0);
}

function draw() {
    myRectangle.update();
}