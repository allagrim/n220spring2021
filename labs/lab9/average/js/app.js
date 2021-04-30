let avejs = document.getElementById("average");
let sumjs = document.getElementById("sum");
let num = document.getElementById("txtName")
function calc(){
    let sum = 0;
    let txtName = num.value.split(",");
    let numfin = txtName.map(Number);
    for(var i = 0; i <numfin.length; i ++){
        sum += numfin[i]
    }
    let average = sum/numfin.length
    avejs.innerHTML = "The average is:" + average;
    sumjs.innerHTML = "The sum is:" + sum;

}
