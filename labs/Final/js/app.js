turn = 1
//This is to signify whos turn it is
grid = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
//This is to see who has what square
var div = document.getElementById("topleft")
div.style.height = "100px"
div.style.width = "100px"
div.style.margin = "5px"
div.style.float = "left";
div.style.backgroundColor = "rgb(0,0,0)"

var div2 = document.getElementById("topmid")
div2.style.height = "100px"
div2.style.width = "100px"
div2.style.margin = "5px"
div2.style.float = "left";
div2.style.backgroundColor = "rgb(0,0,0)"

var div3 = document.getElementById("topright")
div3.style.height = "100px"
div3.style.width = "100px"
div3.style.margin = "5px"
div3.style.float = "left";
div3.style.backgroundColor = "rgb(0,0,0)"

var div4 = document.getElementById("midleft")
div4.style.height = "100px"
div4.style.width = "100px"
div4.style.margin = "5px"
div4.style.float = "left";
div4.style.position = "absolute"
div4.style.top = "120px"
div4.style.backgroundColor = "rgb(0,0,0)"

var div5 = document.getElementById("middle")
div5.style.height = "100px"
div5.style.width = "100px"
div5.style.margin = "5px"
div5.style.float = "left";
div5.style.position = "absolute"
div5.style.top = "120px"
div5.style.left = "118px"
div5.style.backgroundColor = "rgb(0,0,0)"

var div6 = document.getElementById("midright")
div6.style.height = "100px"
div6.style.width = "100px"
div6.style.margin = "5px"
div6.style.float = "left";
div6.style.position = "absolute"
div6.style.top = "120px"
div6.style.left = "228px"
div6.style.backgroundColor = "rgb(0,0,0)"

var div7 = document.getElementById("botleft")
div7.style.height = "100px"
div7.style.width = "100px"
div7.style.margin = "5px"
div7.style.float = "left";
div7.style.position = "absolute"
div7.style.top = "230px"
div7.style.backgroundColor = "rgb(0,0,0)"

var div8 = document.getElementById("botmid")
div8.style.height = "100px"
div8.style.width = "100px"
div8.style.margin = "5px"
div8.style.float = "left";
div8.style.position = "absolute"
div8.style.top = "230px"
div8.style.left = "118px"
div8.style.backgroundColor = "rgb(0,0,0)"

var div9 = document.getElementById("botright")
div9.style.height = "100px"
div9.style.width = "100px"
div9.style.margin = "5px"
div9.style.float = "left";
div9.style.position = "absolute"
div9.style.top = "230px"
div9.style.left = "228px"
div9.style.backgroundColor = "rgb(0,0,0)"


//Assigns the box to the person that selects it
function topleft(){
    if(turn==1){
        grid[0][0] = 1
        turn = turn+1
        div.style.backgroundColor ="rgb(0,0,256)"
    }
    else{
        grid[0][0] = 2
        turn = turn-1
        div.style.backgroundColor ="rgb(256,0,0)"
    }
    console.log(grid[0],"Top")
    check();
    
}
function topmid(){
    if(turn==1){
        grid[0][1] = 1
        turn = 2
        div2.style.backgroundColor ="rgb(0,0,256)"
    }
    else{
        grid[0][1] = 2
        turn = 1
        div2.style.backgroundColor ="rgb(256,0,0)"
    }
    console.log(grid[0],"Top")
    check();
   
}
function topright(){
    if(turn==1){
        grid[0][2] = 1
        turn = 2
        div3.style.backgroundColor ="rgb(0,0,256)"
    }
    else{
        grid[0][2] = 2
        turn = 1
        div3.style.backgroundColor ="rgb(256,0,0)"
    }
    console.log(grid[0],"Top")
    check();
    
}
function midleft(){
    if(turn==1){
        grid[1][0] = 1
        turn = 2
        div4.style.backgroundColor ="rgb(0,0,256)"
    }
    else{
        grid[1][0] = 2
        turn = 1
        div4.style.backgroundColor ="rgb(256,0,0)"
    }
    console.log(grid[1],"Mid")
    check();
    
}
function middle(){
    if(turn==1){
        grid[1][1] = 1
        turn = 2
        div5.style.backgroundColor ="rgb(0,0,256)"
    }
    else{
        grid[1][1] = 2
        turn = 1
        div5.style.backgroundColor ="rgb(256,0,0)"
    }
    console.log(grid[1],"Mid")
    check();
    
}
function midright(){
    if(turn==1){
        grid[1][2] = 1
        turn = 2
        div6.style.backgroundColor ="rgb(0,0,256)"
    }
    else{
        grid[1][2] = 2
        turn = 1
        div6.style.backgroundColor ="rgb(256,0,0)"
    }
    console.log(grid[1],"Mid")
    check();
    
}
function botleft(){
    if(turn==1){
        grid[2][0] = 1
        turn = 2
        div7.style.backgroundColor ="rgb(0,0,256)"
    }
    else{
        grid[2][0] = 2
        turn = 1
        div7.style.backgroundColor ="rgb(256,0,0)"
    }
    console.log(grid[2],"Bot")
    check();
    
}
function botmid(){
    if(turn==1){
        grid[2][1] = 1
        turn = 2
        div8.style.backgroundColor ="rgb(0,0,256)"
    }
    else{
        grid[2][1] = 2
        turn = 1
        div8.style.backgroundColor ="rgb(256,0,0)"
    }
    console.log(grid[2],"Bot")
    check();
    
}
function botright(){
    if(turn==1){
        grid[2][2] = 1
        turn = 2
        div9.style.backgroundColor ="rgb(0,0,256)"
    }
    else{
        grid[2][2] = 2
        turn = 1
        div9.style.backgroundColor ="rgb(256,0,0)"
    }
    console.log(grid[2],"Bot")
    check();
    
}
//These are the squares and see who clicked them and change the array "grid" as a response

function check(){
    if(grid[0][0] & grid [0][1] & grid [0][2] == 1){
        console.log("Player 1 wins! ver 1.1")
        dvOutput.innerHTML = "Player 1 wins!"
    }
    if(grid[1][0] & grid [1][1] & grid [1][2] == 1){
        console.log("Player 1 wins! ver 1.2")
        dvOutput.innerHTML = "Player 1 wins!"
    }
    if(grid[0][0] & grid [1][0] & grid [2][0] == 1){
        console.log("Player 1 wins! ver 1.3")
        dvOutput.innerHTML = "Player 1 wins!"
    }
    if(grid[2][0] & grid [2][1] & grid [2][2] == 1){
        console.log("Player 1 wins! ver 1.4")
        dvOutput.innerHTML = "Player 1 wins!"
    }
    if(grid[0][1] & grid [1][1] & grid [2][1] == 1){
        console.log("Player 1 wins! ver 1.5")
        dvOutput.innerHTML = "Player 1 wins!"
    }
    if(grid[0][2] & grid [1][2] & grid [2][2] == 1){
        console.log("Player 1 wins! ver 1.6")
        dvOutput.innerHTML = "Player 1 wins!"
    }
    if(grid[0][0] & grid [1][1] & grid [2][2] == 1){
        console.log("Player 1 wins! ver 1.7")
        dvOutput.innerHTML = "Player 1 wins!"
    }
    if(grid[0][2] & grid [1][1] & grid [2][0] == 1){
        console.log("Player 1 wins! ver 1.8")
        dvOutput.innerHTML = "Player 1 wins!"
    }
    //Checking to see if P1 wins
    if(grid[0][0] && grid [0][1] && grid [0][2] == 2){
        console.log("Player 2 wins! ver 2.1")
        dvOutput.innerHTML = "Player 2 wins!"
    }
    if(grid[1][0] && grid [1][1] && grid [1][2] == 2){
        console.log("Player 2 wins! ver 2.2")
        dvOutput.innerHTML = "Player 2 wins!"
    }
    if(grid[0][0] && grid [1][0] && grid [2][0] == 2){
        console.log("Player 2 wins! ver 2.3")
        dvOutput.innerHTML = "Player 2 wins!"
    }
    if(grid[2][0] && grid [2][1] && grid [2][2] == 2){
        console.log("Player 2 wins! ver 2.4")
        dvOutput.innerHTML = "Player 2 wins!"
    }
    if(grid[0][1] && grid [1][1] && grid [2][1] == 2){
        console.log("Player 2 wins! ver 2.5")
        dvOutput.innerHTML = "Player 2 wins!"
    }
    if(grid[0][2] && grid [1][2] && grid [2][2] == 2){
        console.log("Player 2 wins! ver 2.6")
        dvOutput.innerHTML = "Player 2 wins!"
    }
    if(grid[0][0] && grid [1][1] && grid [2][2] == 2){
        console.log("Player 2 wins! ver 2.7")
        dvOutput.innerHTML = "Player 2 wins!"
    }
    if(grid[0][2] && grid [1][1] && grid [2][0] == 2){
        console.log("Player 2 wins! ver 2.8")
        dvOutput.innerHTML = "Player 2 wins!"
    }
    
    //Checking to see if P2 wins
}

function reset(){
    grid = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
    div.style.backgroundColor = "rgb(0,0,0)"
    div2.style.backgroundColor = "rgb(0,0,0)"
    div3.style.backgroundColor = "rgb(0,0,0)"
    div4.style.backgroundColor = "rgb(0,0,0)"
    div5.style.backgroundColor = "rgb(0,0,0)"
    div6.style.backgroundColor = "rgb(0,0,0)"
    div7.style.backgroundColor = "rgb(0,0,0)"
    div8.style.backgroundColor = "rgb(0,0,0)"
    div9.style.backgroundColor = "rgb(0,0,0)"
    dvOutput.innerHTML = "Board Reset"
}