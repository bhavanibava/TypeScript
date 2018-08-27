var calculator = /** @class */ (function () {
    function calculator(x, y) {
        this.a = x;
        this.b = y;
    }
    calculator.prototype.add = function () {
        return "sum of " + this.a + " and " + this.b + " is " + (this.a + this.b);
    };
    calculator.prototype.sub = function () {
        return "subtract of " + this.a + " and " + this.b + " is " + (this.a - this.b);
    };
    calculator.prototype.mul = function () {
        return "multiply of " + this.a + " and " + this.b + " is " + this.a * this.b;
    };
    calculator.prototype.div = function () {
        return "division of " + this.a + " and " + this.b + " is " + this.a / this.b;
    };
    return calculator;
}());
var class_obj = new calculator(20, 5);
// Addition
console.log(class_obj.add());
// Subtraction
console.log(class_obj.sub());
// Multiplication
console.log(class_obj.mul());
// Division
console.log(class_obj.div());
