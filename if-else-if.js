var homeFood = "DaalChawal";
var moneyIHave = 300;
var zingerPrice = 350;
if (homeFood === "DaalChawal" && moneyIHave < 300) {
    console.log("Go out and buy biryani");
}
else if (moneyIHave >= zingerPrice) // this will execute if above condition is false
 {
    console.log("Buy Zinger");
}
else {
    console.log("Eate Daal Chawal");
} // this will execute if above conditions become false
// simple if else example
var classDay = "Friday";
if (classDay === "Wednesday") {
    console.log("Go to class");
}
else {
    console.log("Do nothing sleep");
}
