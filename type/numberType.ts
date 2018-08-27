class addition {
    addfun(a:number,b:number){
        return a+b;
    } 
}
let a:number = 20;
let b:number = 10;
let add_obj = new addition();
let result = add_obj.addfun(a,b);
console.log("add a and b value :"+result);