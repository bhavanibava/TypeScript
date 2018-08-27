interface Phone {
    readonly Name :string;
    readonly screenType : string;
}
let PhoneDetails : Phone = {Name:"samsung",screenType:"touch"};
//  if you assign name again then it will show error bcoz of readonly property
// PhoneDetails.Name = "micromax"; 
console.log("phone name: "+PhoneDetails.Name);