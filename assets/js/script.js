var currentDay_el = document.getElementById("currentDay");
var container_el = document.querySelector(".container");


var time = moment();
//Display Todays Date info in page banner
function todaysDate(){
    counter = setInterval(timer, 1000);
    function timer(){
        currentDay_el.innerHTML = moment();
        console.log("----Loaded Current Date----");
    }
}
todaysDate();

