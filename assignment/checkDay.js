function checkDay(day){
    switch (day()){
    case "Saturday":
    case "Sunday":
    console.log("Weekend");
    break;
    default:
console.log("Weekday");
    }
}
console.log(checkDay("Sunday"));
