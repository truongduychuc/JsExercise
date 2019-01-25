function swap(a,b) {
    a+=b;
    b=a-b;
    a-b;
}
function getRandomInteger(min,max) {
    return Math.floor(Math.random()*(max-min))+min;
}