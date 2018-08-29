enum animalName{ dog,cat,camel,lion,bear};
console.log(animalName[2]);

const enum binaryValue{
    one = 0b001,
    two = 0b010,
    three = 0b011,
    four = 0b100
}
// binaryValue.one = 0b0001; //const so we cannot modified the value
console.log(binaryValue.three);
console.log(animalName[binaryValue.three]);