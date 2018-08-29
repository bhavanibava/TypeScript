let Name:string = "Bhavasai";
// use 'as' keyword
let len :number = (Name as string).length;
let message:string = "hi,welcome";
let count:number = (<string>message).length; //use angle-bracket '<>'
console.log(len);
console.log(count);