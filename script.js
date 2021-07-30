var display = document.querySelector("#display")
var number1 = "";
var count = 0;

function press(element) {
    if(display.innerText == 0){
        display.innerText = element;
        number1 += element;
        console.log(number1);
        console.log("air");

    }
    else if(count > 0){
        count = 0;
        display.innerText = element;
        number1 = "";
        number1 +=element;
        console.log(number1);
        console.log("water");

    }
    else{
        display.innerText += element;
        number1 += element;
        console.log(number1);
        console.log("fire");
    }
}

// Operations symbols
function setOP (element) {
    display.innerText = "";
    number1 += element;
    console.log(number1);
    console.log("earth");
}

function calculate() {
    display.innerText = eval(number1);
    number1 = display.innerText;
    count += 1;
}

function clr() {
    display.innerText = 0;
    number1 = "";
    count = 0;
}
