function getPhoneName(phoneData) {
    console.log("phone name is : " + phoneData.Name);
}
function getTabletName(TabletData) {
    console.log("Tablet name is : " + TabletData.Name);
}
var varOfPhoneFunction = { Name: "samsung" };
getPhoneName(varOfPhoneFunction);
var varOfTabletFunction = { Name: "apple" };
getTabletName(varOfTabletFunction);
