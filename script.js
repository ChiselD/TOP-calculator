// const btn1 = document.getElementById("one");
// const btn2 = document.getElementById("two");
// const btn3 = document.getElementById("three");
// const btn4 = document.getElementById("four");
// const btn5 = document.getElementById("five");
// const btn6 = document.getElementById("six");
// const btn7 = document.getElementById("seven");
// const btn8 = document.getElementById("eight");
// const btn9 = document.getElementById("nine");
// const btn0 = document.getElementById("zero");
// const btnAdd = document.getElementById("add");
// const btnSubtract = document.getElementById("subtract");
// const btnMultiply = document.getElementById("multiply");
// const btnDivide = document.getElementById("divide");
// const btnEquals = document.getElementById("equals");
// const btnClear = document.getElementById("clear");

const buttons = document.querySelectorAll(".button");
const screen = document.getElementById("screen");

let buttonClicked;
let currentNumber = "";
let currentOperation = [];
let displayValue = "";

buttons.forEach(button => {
	button.addEventListener("click", e => {
		buttonClicked = button;
		console.log(buttonClicked);

		// Handle clicks on number buttons
		if (buttonClicked.classList.contains("number")) {
			currentNumber += buttonClicked.textContent;
			displayValue = currentNumber;
			screen.textContent = displayValue;

		// Handle clicks on clear button
		} else if (buttonClicked.id === "clear") {
			calculator.clear();

		// Handle clicks on operator buttons
		} else {
			if (currentNumber) {
				currentOperation.push(currentNumber);
				currentNumber = "";
				displayValue = buttonClicked.textContent;
				screen.textContent = displayValue;
			}
		}
	});
});


const calculator = {
	add: function(x, y) {
		return x + y;
	},
	subtract: function(x, y) {
		return x - y;
	},
	multiply: function(x, y) {
		return x * y;
	},
	divide: function(x, y) {
		return x / y;
	},
	operate: function(operator, x, y) {
		return operator(x, y);
	},
	clear: function() {
		currentOperation = [];
		currentNumber = "";
		displayValue = "";
		screen.textContent = "0";
		console.log("You cleared!");
	}
};


// console.log(calculator.operate(calculator.subtract, 1, 2));




////////