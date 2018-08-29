var animalName;
(function (animalName) {
    animalName[animalName["dog"] = 0] = "dog";
    animalName[animalName["cat"] = 1] = "cat";
    animalName[animalName["camel"] = 2] = "camel";
    animalName[animalName["lion"] = 3] = "lion";
    animalName[animalName["bear"] = 4] = "bear";
})(animalName || (animalName = {}));
;
console.log(animalName[2]);
var binaryValue;
(function (binaryValue) {
    binaryValue[binaryValue["one"] = 1] = "one";
    binaryValue[binaryValue["two"] = 2] = "two";
    binaryValue[binaryValue["three"] = 3] = "three";
    binaryValue[binaryValue["four"] = 4] = "four";
})(binaryValue || (binaryValue = {}));
console.log(binaryValue.three);
console.log(animalName[binaryValue.three]);
