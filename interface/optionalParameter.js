function display(data) {
    var temp = { Name: "samsung", screenType: "touch screen" };
    if (data.screenType) {
        data.screenType = temp.screenType;
        console.log("same Name");
    }
    return temp;
}
var myObj = display({ Name: "samsung", screenType: "touch screen" });
console.log("function return value is  name : " + myObj.Name + " screen type: " + myObj.screenType);
