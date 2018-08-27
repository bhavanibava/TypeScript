var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.sub = function (a, b) {
        return a - b;
    };
    Calculator.prototype.mul = function (a, b) {
        return a * b;
    };
    Calculator.prototype.div = function (a, b) {
        return a / b;
    };
    return Calculator;
}());
var value1 = 20;
var value2 = 10;
var classObj = new Calculator();
// Addition
console.log("Addition value : ", classObj.add(value1, value2));
// Subtraction
console.log("Subtraction value : ", classObj.sub(value1, value2));
// Multiplication
console.log("Multiplication value : ", classObj.mul(value1, value2));
// Division
console.log("Division value : ", classObj.div(value1, value2));
