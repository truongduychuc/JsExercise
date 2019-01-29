function swap(a,b) {
    a+=b;
    b=a-b;
    a-=b;
}
function getRandomInteger(min,max) {
    return Math.floor(Math.random()*(max-min))+min;
}
function plus(a,b) {
    return parseInt(a) + parseInt(b);  // if you write a+b when you return a value for a function, it will perform a plus between two strings.
}
function minus(a,b) {
    return a-b;
}
function multiple(a,b) {
    return a*b;
}
function divide(a,b) {
    //If you don't type any number to input type number, it will return a zero number although it seems an empty string when you alert it.
    if(b==0)
        return "Can not divide for zero!"
    else return a/b;
}

function replaceCharAt(str, index, replaceString) {
    return str.substring(0, index) + replaceString + str.substring(index + 1);
}