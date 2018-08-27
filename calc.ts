class calculator{
    a:number;
    b:number;
    constructor(x:number,y:number){
        this.a = x;
        this.b = y;
    }
    add(){
        return `sum of ${this.a} and ${this.b} is ${this.a + this.b}`;
    }
    sub(){
        return `subtract of ${this.a} and ${this.b} is ${this.a - this.b}`;
    }
    mul(){
        return `multiply of ${this.a} and ${this.b} is ${this.a * this.b}`;
    }
    div(){
        return `division of ${this.a} and ${this.b} is ${this.a / this.b}`;
    }
}

let class_obj = new calculator(20,5);
// Addition
console.log(class_obj.add());
// Subtraction
console.log(class_obj.sub());
// Multiplication
console.log(class_obj.mul());
// Division
console.log(class_obj.div());