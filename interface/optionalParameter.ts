interface Phone {
    Name? :string;
    screenType? : string;
}
function display(data:Phone): {Name:string; screenType : string}{
    let temp = {Name:"samsung", screenType : "touch screen"};
    if(data.screenType){
        data.screenType = temp.screenType;
        console.log("same Name");
    }
    return temp;
}
let myObj = display({Name:"samsung", screenType:"touch screen"});
console.log("function return value is  name : "+myObj.Name+" screen type: "+myObj.screenType);