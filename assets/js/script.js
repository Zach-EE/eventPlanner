var currentDay_el = document.getElementById("currentDay");
var container_el = document.querySelector(".container");

console.log(currentDay_el.textContent);

function todaysDate(){
    counter = setInterval(timer, 1000);
    function timer(){
        currentDay_el.innerHTML = moment();
        console.log("----Loaded Current Date----");
    }
}
// * populate container with planner date elements
var dateCounter = 0;
var container_tag = '<div class="row"><div class="col">Date</div><div class="col">Event</div><div class="col">Filler</div></div>';

for(i=0; i < 7; i++){
    container_tag += '<div class="row"><div class="col">'+moment().day(i).date()+'</div><div class="col">test</div><div class="col">test</div></div>'
    container_el.innerHTML = container_tag;
}

console.log(container_tag);

todaysDate();

