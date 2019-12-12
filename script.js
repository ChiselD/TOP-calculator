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
		return this.operator(x, y);
	}
};

console.log(calculator.add(1, 2));
console.log(calculator.subtract(1, 2));
console.log(calculator.multiply(1, 2));
console.log(calculator.divide(1, 2));