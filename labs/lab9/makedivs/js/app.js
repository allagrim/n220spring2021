let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

function draw(){
    for(var i = 0; i < 5; i ++){
        let objectDiv = document.createElement("div")
        objectDiv.style.backgroundColor = objects[i].color;
        objectDiv.style.height = objects[i].height + "px";
        objectDiv.style.width = objects[i].width + "px";
        document.body.appendChild(objectDiv);
    }
}