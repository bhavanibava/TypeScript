var Phone = /** @class */ (function () {
    function Phone(name) {
        this.Name = name;
    }
    Phone.prototype.screen_type = function (type) {
        return "phone screen type :" + type;
    };
    Phone.prototype.battery_type = function (type) {
        return "phone battery type :" + type;
    };
    Phone.prototype.size = function (height, width) {
        return "phone size : " + height + "," + width;
    };
    return Phone;
}());
var Tablet = /** @class */ (function () {
    function Tablet(name) {
        this.tablet_Name = name;
    }
    Tablet.prototype.screen_type = function (type) {
        return "tablet_phone screen type :" + type;
    };
    Tablet.prototype.size = function (height, width) {
        return "tablet_phone size : " + height + "," + width;
    };
    return Tablet;
}());
var phone_Obj = new Phone("Samsung Galaxy Core Prime Phone ");
var phone_Screen_Type = phone_Obj.screen_type("touch screen");
console.log(phone_Screen_Type);
var phone_battery_Type = phone_Obj.battery_type("removal");
console.log(phone_battery_Type);
// tablet object 
var tablet_Obj = new Tablet("Samsung Galaxy Tab");
var tablet_Screen_Type = tablet_Obj.screen_type("touch screen");
console.log(tablet_Screen_Type);
