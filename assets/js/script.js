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
var container_tag = '<div class="row"><h3 class="col">Date</h3><h3 class="col">Event</h3><h3 class="col">Filler</h3></div>'
+'';

for(i=0; i < 7; i++){
    container_tag += '<div class="row"><div class="col">'+moment().day(i).date()+'</div><div class="col">placeHolder</div><div class="col">PlaceHolder</div></div>'
    container_el.innerHTML = container_tag;
}

console.log(container_tag);

todaysDate();

