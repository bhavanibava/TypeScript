interface Phone {
    Name :string;
}
interface Tablet{
    Name : string;
}
function getPhoneName(phoneData : Phone){
    console.log("phone name is : "+phoneData.Name);
}
function getTabletName(TabletData:Tablet){
    console.log("Tablet name is : "+TabletData.Name);
}

let varOfPhoneFunction = {Name:"samsung"};
getPhoneName(varOfPhoneFunction);

let varOfTabletFunction = {Name : "apple"};
getTabletName(varOfTabletFunction);