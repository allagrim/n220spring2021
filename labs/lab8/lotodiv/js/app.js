

function div(){
    for(var i = 0; i < 100; i ++){
        var newDiv = document.createElement("div");
        newDiv.style.height = "20px";
        newDiv.style.width = "20px";
        newDiv.style.float = "left";
        newDiv.style.backgroundColor = "rgb(" + 2 * i + "," + 3 * i +"," + 10 * i + ")";
        document.body.appendChild(newDiv)
    }
}

div();

