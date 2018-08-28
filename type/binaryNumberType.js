var addition = /** @class */ (function () {
    function addition() {
    }
    addition.prototype.addfun = function (a, b) {
        return "sum of " + a + " and " + b + " is " + (a + b);
    };
    return addition;
}());
var a = 8;
var b = 2;
var add_obj = new addition();
console.log(add_obj.addfun(a, b));
