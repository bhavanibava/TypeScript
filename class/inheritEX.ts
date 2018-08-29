class Phone {
    name : string;
    constructor(Name : string){
        this.name = Name;
    }
    screen_type (type :string){
        console.log("screen_type function from base class");
        return "phone screen type :"+type;
    }
    battery_type(type :string){
        console.log("battery_type function from base class");
        return "phone battery type :"+type;
    }
    size(height :number,width :number){
        return "phone size : "+height+","+width;
    }
}
class Tablet extends Phone{
    constructor(name : string){
        super(name);
    }
    screen_type (type :string){
        console.log("screen_type from derived class");
        super.screen_type(type);
        return "type is :"+type;
    }
}

let obj = new Tablet("samsung");
let value_screen =obj.screen_type("touch");
console.log(value_screen);
// let val_battery = obj.battery_type("removal");
// console.log(val_battery);