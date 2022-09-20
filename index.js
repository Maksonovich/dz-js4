let press1 = document.getElementById("press1")
let press2 = document.getElementById("press2")

let number1 = document.getElementById("number1")

let result = 0;

press1.addEventListener("click" , function () {
    result += 1;
    number1.innerHTML = result;
})

press2.addEventListener('click' , function() {
    result -= 1;
    number1.innerHTML = result;
})