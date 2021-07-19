var currentDay_el = document.getElementById("currentDay");
var container_el = document.getElementById("container");

console.log(currentDay_el.textContent);

function todaysDate(){
    counter = setInterval(timer, 1000);
    function timer(){
        currentDay_el.innerHTML = moment().;
        console.log("----Loaded Current Date----");
    }
}

todaysDate();