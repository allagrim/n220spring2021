var peak = document.getElementById("peak")
var sizeDimensions = 100
console.log(sizeDimensions);
peak.style.height = "100px"
peak.style.width = "100px"
peak.style.margin = "0px"
peak.style.backgroundColor = "rgb(0,256,0)"
function grow(){
    sizeDimensions = sizeDimensions * 1.1;

    peak.style.width = sizeDimensions + "px"
    peak.style.height = sizeDimensions + "px"
    
}