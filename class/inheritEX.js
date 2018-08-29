var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Phone = /** @class */ (function () {
    function Phone(Name) {
        this.name = Name;
    }
    Phone.prototype.screen_type = function (type) {
        console.log("screen_type function from base class");
        return "phone screen type :" + type;
    };
    Phone.prototype.battery_type = function (type) {
        console.log("battery_type function from base class");
        return "phone battery type :" + type;
    };
    Phone.prototype.size = function (height, width) {
        return "phone size : " + height + "," + width;
    };
    return Phone;
}());
var Tablet = /** @class */ (function (_super) {
    __extends(Tablet, _super);
    function Tablet(name) {
        return _super.call(this, name) || this;
    }
    Tablet.prototype.screen_type = function (type) {
        console.log("screen_type from derived class");
        _super.prototype.screen_type.call(this, type);
        return "type is :" + type;
    };
    return Tablet;
}(Phone));
var obj = new Tablet("samsung");
var value_screen = obj.screen_type("touch");
console.log(value_screen);
// let val_battery = obj.battery_type("removal");
// console.log(val_battery);
