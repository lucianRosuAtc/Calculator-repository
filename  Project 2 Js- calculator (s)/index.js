let num1 = 1200
let num2 = 49

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


let sumEl = document.getElementById("sum-el")



function add() {
    let result = num1 + num2
    sumEl.textContent = "SUM: " + result
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "DIFFERENCE: " + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "THE QUOTIENT: " + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "PRODUCT: " + result
}

function remainder(){
    let result= num1 % num2
    sumEl.textContent = " REMAINDER: " + result
}

 function isSquare1 () {
    let result = Math.pow(num1, 2);
    sumEl.textContent = "EXPONENT: " + result
}

function squareRoot1(){
    let result = Math.sqrt(num1)
    sumEl.textContent = " THE RADICANT: " +result
}
 function isSquare2 () {
    let result = Math.pow(num2, 2);
    sumEl.textContent = " EXPONENT: " + result
}

function squareRoot2(){
    let result = Math.sqrt(num2)
    sumEl.textContent = "THE RADICANT: " +result
}