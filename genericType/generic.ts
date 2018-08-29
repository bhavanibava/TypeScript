function add<T>(a,b):number{
    return a+b;
}
function fullName<T>(name:T){
    return name;
}
console.log(add<number>(10,20));
console.log(fullName<string>("BhavaSai"));