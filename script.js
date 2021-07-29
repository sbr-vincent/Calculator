var display = document.querySelector("#display")
var number1 = "";
var num2 = "";
var counter = 0;

var reset = 0;



function press(element) {
    if(counter == 0){
        if(display.innerText == 0){
            display.innerText = element;
        }
        else if(element == 1){
            console.log(element);
            display.innerText =  display.innerText + element;
            number1 = display.innerText;
            console.log(number1);
        }
        else if(element == 2){
            display.innerText =  display.innerText + element;
            number1 = display.innerText;
        }else if(element == 3){
            display.innerText =  display.innerText + element;
            number1 = display.innerText;
        }else if(element == 4){
            display.innerText =  display.innerText + element;
            number1 = display.innerText;
        }else if(element == 5){
            display.innerText =  display.innerText + element;
            number1 = display.innerText;
        }else if(element == 6){
            display.innerText =  display.innerText + element;
            number1 = display.innerText;
        }else if(element == 7){
            display.innerText =  display.innerText + element;
            number1 = display.innerText;
        }else if(element == 8){
            display.innerText =  display.innerText + element;
            number1 = display.innerText;
        }else if(element == 9){
            display.innerText =  display.innerText + element;
            number1 = display.innerText;
        }
        else if(element == 0){
            display.innerText =  display.innerText + element;
            number1 = display.innerText;
        }
        else if(element == '.'){
            display.innerText =  display.innerText + " " + element;
            number1 = display.innerText;
        }
    }
    else if(counter == 1){
        if(display.innerText == 0){
            display.innerText = element;
        }
        else if(element == 1){
            display.innerText =  display.innerText + element;
            num2 = display.innerText;
            console.log(number1);
        }
        else if(element == 2){
            display.innerText =  display.innerText + element;
            num2 = display.innerText;
        }else if(element == 3){
            display.innerText =  display.innerText + element;
            num2 = display.innerText;
        }else if(element == 4){
            display.innerText =  display.innerText + element;
            num2 = display.innerText;
        }else if(element == 5){
            display.innerText =  display.innerText + element;
            num2 = display.innerText;
        }else if(element == 6){
            display.innerText =  display.innerText + element;
            num2 = display.innerText;
        }else if(element == 7){
            display.innerText =  display.innerText + element;
            num2 = display.innerText;
        }else if(element == 8){
            display.innerText =  display.innerText + element;
            num2 = display.innerText;
        }else if(element == 9){
            display.innerText =  display.innerText + element;
            num2 = display.innerText;
        }
        else if(element == 0){
            display.innerText =  display.innerText + element;
            num2 = display.innerText;
        }
        else if(element == '.'){
            display.innerText =  display.innerText + " " + element;
            num2 = display.innerText;
        }
    }
}

// Operations symbols
function setOP (element) {
    if(element == '+'){
        counter++;
        operation = element;
    }else if(element == '-'){
        counter++;
    }else if(element == '*'){
        counter++;
    }else if(element == '/'){
        counter++;
    }
}

function calculate() {
    emptyString = "";
    emptyString += number1 + operation+ num2;
    display.innerText = eval(emptyString);
}

// function clr() {

// }
