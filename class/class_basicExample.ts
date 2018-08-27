class Phone {
    Name :string;
    constructor(name :string){
        this.Name = name;
    }
    screen_type (type :string){
        return "phone screen type :"+type;
    }
    battery_type(type :string){
        return "phone battery type :"+type;
    }
    size(height :number,width :number){
        return "phone size : "+height+","+width;
    }
}
class Tablet{
    tablet_Name : string;
    constructor(name:string){
        this.tablet_Name = name;
    }
    screen_type (type :string){
        return "tablet_phone screen type :"+type;
    }
    size(height :number,width :number){
        return "tablet_phone size : "+height+","+width;
    }
}

let phone_Obj = new Phone("Samsung Galaxy Core Prime Phone ");
let phone_Screen_Type = phone_Obj.screen_type("touch screen");
console.log(phone_Screen_Type);
let phone_battery_Type = phone_Obj.battery_type("removal");
console.log(phone_battery_Type);
// tablet object 
let tablet_Obj = new Tablet("Samsung Galaxy Tab");
let tablet_Screen_Type = tablet_Obj.screen_type("touch screen");
console.log(tablet_Screen_Type);
