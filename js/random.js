var button = document.getElementById("randomNumberButton")

function randNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
function generateNumber() {
    let min = document.getElementById('minNumber').value;
    let max = document.getElementById('maxNumber').value;
    let rand = randNum(min,max);
    document.getElementById("randomNumberOutput").innerHTML = rand;
}