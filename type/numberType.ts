class addition {
    addfun(a:number,b:number){
        return `sum of ${a} and ${b} is ${a+b}`;
    } 
}
let a:number = 20;
let b:number = 10;
let add_obj = new addition();
console.log(add_obj.addfun(a,b));
