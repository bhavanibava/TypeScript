function phone(name : string, battery? : string){
    return `phone name ${name}and battery type ${battery}`;
}

function display(name : string, dob:undefined){
    return `name:${name}`;
}

console.log(phone("micromax","removal"));
console.log(phone("samsung")); // optional parameter
console.log(display("Bhavani",undefined)); //undefined parameter