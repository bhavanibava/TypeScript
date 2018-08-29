interface bus{
    color :string;
    Name : string;
}
interface bike extends bus {
    Number : number;
    speed : string;
}
// function vehicle(interfaceValues : bike){

// }

let vehicle_details = <bike>{};
vehicle_details.color = "green";
vehicle_details.speed = '60km/h';
console.log("vehicle details are : ",vehicle_details);