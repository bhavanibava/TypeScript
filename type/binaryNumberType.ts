class addition {
    addfun(a:number,b:number){
        return `sum of ${a} and ${b} is ${a+b}`;
    } 
}
let a:number = 0b1000; //binary value of 8 = 1000
let b:number = 0b0010; // binary value of 2 = 0010
let add_obj = new addition();
console.log(add_obj.addfun(a,b));