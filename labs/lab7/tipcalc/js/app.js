let bill = document.querySelector("#bill")
let tip = 0;
let totalbill = 0;
function tipcalc(){
    tip = bill.value * .20;
    totalbill = bill.value*1.20;
    console.log("Tip: $",tip,"Total: $",totalbill);
}



