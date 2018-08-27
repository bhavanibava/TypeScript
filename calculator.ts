class Calculator{
    add(a:number,b:number):any{
        return a+b;
    }
    sub(a:number,b:number):any{
        return a-b;
    }
    mul(a:number,b:number):any{
        return a*b;
    }
    div(a:number,b:number):any{
        return a/b;
    }
}
let value1 = 20;
let value2 = 10;
let classObj = new Calculator();
// Addition
console.log("Addition value : ",classObj.add(value1,value2));
// Subtraction
console.log("Subtraction value : ",classObj.sub(value1,value2));
// Multiplication
console.log("Multiplication value : ",classObj.mul(value1,value2));
// Division
console.log("Division value : ",classObj.div(value1,value2));