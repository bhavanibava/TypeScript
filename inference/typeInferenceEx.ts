let x = 20; //number type
let y = [3,"bhavani","b.tech",null]; // array of (string|number)
let value = [true,"string",0b0110]; // array of (string|number|boolean)
let z = 0b0100; // binary value
let z1 = 0xb; //hexa decimal value
let number = `binary value is: ${z} and hex decimal value is: ${z1}`;
let stud = `Name: ${y[1]} and R.no: ${y[0]}`;
console.log("number is : "+x);
console.log("array : "+y);
console.log(stud);
console.log("array [3] is  : "+y[3]);
console.log(number);
console.log("value[] has : "+value);