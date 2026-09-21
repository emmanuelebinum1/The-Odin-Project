const buttonContainer = document.querySelector(".buttonContainer");
buttonContainer.style.width = `360px`;
const buttonSymbols = ["C", "CE", "%", "/", "1", "2", "3", "*", "4", "5", "6", "-", "7", "8", "9", "+", "n", "0", ".", "="];
const buttonClassSymbols = ["C", "CE", "percent", "divide", "one", "two", "three", "multiply", "four", "five", "six", "minus", "seven", "eight", "nine", "plus", "n", "zero", "dec", "equals"];
let tempStorage1 = [];
let tempStorage2 = [];
let tempStorage3 = [];

function addbuttons() {
    for (let i = 0; i < 20; i++) {
        const button = document.createElement("button");
        button.style.height = "60px";
        button.style.width = "90px";
        button.style.backgroundColor = "rgb(128, 128, 128)";
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = "rgb(211, 211, 211)";
        });
        button.addEventListener('mouseleave', () => {
            button.style.background = "rgb(128, 128, 128)";
        });
        button.textContent = `${buttonSymbols[i]}`;
        button.classList.add(`${buttonClassSymbols[i]}class`);

        buttonContainer.append(button);
    }

}
function buttonLogic() {
    buttonContainer.addEventListener("click", (e) => {
        const percentButtons = e.target.closest(".percentclass");
        const divideButtons = e.target.closest(".divideclass");
        const multiplyButtons = e.target.closest(".multiplyclass");
        const minusButtons = e.target.closest(".minusclass");
        const plusButtons = e.target.closest(".plusclass");
        const digitButtons = e.target.closest(".oneclass, .twoclass, .threeclass, .fourclass, .fiveclass, .sixclass, .sevenclass, .eightclass, .nineclass, .zeroclass, .decclass")
        const equalsButton = e.target.closest(".equalsclass")

        if (percentButtons) {
            console.log("Percent Button was clicked");
        }
        else if (divideButtons) {
            tempStorage2.push('/');
            console.log(tempStorage2);
        }
        else if (multiplyButtons) {
            tempStorage2.push('*');
            console.log(tempStorage2);
        }
        else if (minusButtons) {
            tempStorage2.push('-');
            console.log(tempStorage2);
        }
        else if (plusButtons) {

            tempStorage2.push('+');
            console.log(tempStorage2);


        }
        else if (digitButtons) {
            if (tempStorage2.length < 2) {
                tempStorage2.push(digitButtons.textContent);
                if (tempStorage2[0] != '+' || tempStorage2[0] != '-' || tempStorage2[0] != '*' || tempStorage2[0] != '/' || tempStorage2[0] != '%') {
                    const addedValue = tempStorage2.reduce((total, current) => {
                        return (total + current);

                    });
                    tempStorage2 = [];
                    tempStorage2.push(addedValue);
                }

                console.log(tempStorage2);
            } else {

                tempStorage3.push(digitButtons.textContent);
                const addedValue = tempStorage3.reduce((total, current) => {
                    return (total + current);
                });
                tempStorage3 = [];
                tempStorage3.push(addedValue);
                console.log(tempStorage3);
            }

        } else if (equalsButton) {
            if (tempStorage2[1] == '+') {
                const addition = add(tempStorage2, tempStorage3);
                console.log(addition);
            } else if (tempStorage2[1] == '-') {
                const subtraction = subtract(tempStorage2, tempStorage3);
                console.log(subtraction);
            } else if (tempStorage2[1] == '/') {
                const division = divide(tempStorage2, tempStorage3);
                console.log(division);
            } else if (tempStorage2[1] == '*') {
                const multiplied = multiply(tempStorage2, tempStorage3);
                console.log(multiplied);
            }
            tempStorage2 = [];
            tempStorage3 = [];
        }

    });

}



addbuttons();
buttonLogic();


function adder(total, current) {
    if (current === "+") {
        return total;
    } else {
        return total + Number(current);
    }
}

function add(tempStorage2, tempStorage3) {
    const addition = [...tempStorage2, ...tempStorage3].reduce(adder, 0);
    return addition;
}

function subtracter(total, current) {
    if (current === "-") {
        return total;
    } else {
        return Number(total) - Number(current);
    }
}


function subtract(tempStorage2, tempStorage3) {
    const subtraction = [...tempStorage2, ...tempStorage3].reduce(subtracter);
    return subtraction;
}

function divider(total, current) {
    if (current === "/") {
        return total;
    } else {
        return Number(total) / Number(current);
    }
}

function divide(tempStorage2, tempStorage3) {
    const division = [...tempStorage2, ...tempStorage3].reduce(divider);
    return division;
}

function multiplier(total, current) {
    if (current === "*") {
        return total;
    } else {
        return Number(total) * Number(current);
    }
}

function multiply(tempStorage2, tempStorage3) {
    const multiply = [...tempStorage2, ...tempStorage3].reduce(multiplier);
    return multiply;
}