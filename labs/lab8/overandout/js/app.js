var div = document.getElementById("mouseHover")
div.style.height = "200px"
div.style.width = "200px"
div.style.margin = "0px"
div.style.backgroundColor = "rgb(0,0,256)"

function mouseOn(){
    div.style.backgroundColor ="rgb(0,0,0)"
}

function mouseOut(){
    div.style.backgroundColor = "rgb(0,0,256)"
}