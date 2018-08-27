var addition = /** @class */ (function () {
    function addition() {
    }
    addition.prototype.addfun = function (a, b) {
        return a + b;
    };
    return addition;
}());
var a = 20;
var b = 10;
var add_obj = new addition();
var result = add_obj.addfun(a, b);
console.log("add a and b value :" + result);
