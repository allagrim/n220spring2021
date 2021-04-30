let user = document.querySelector("#usrNm");
let pass = document.querySelector("#psWrd");
let dvOutput = document.querySelector("#dvOutput");

function sayHello(){
    if( user.value == "username" && pass.value == "password"){
        dvOutput.innerHTML = "Correct Username and Password, welcome";
    }
}