//callback
function display(str){
    console.log(str);

}
function muSum(num1,num2, myCallback) {
    let sum=num1+num2;
    myCallback(sum);

}
let a=21;
let b=23;
mySum(a, b, display);