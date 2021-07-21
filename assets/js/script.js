var currentDay_el = document.getElementById("currentDay");
var container_el = document.querySelector(".container-md");
var containerHeader = document.querySelector(".container-header");
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
var container_tag = ""
function init(){
    var contHeader_tag ='whoop whoop' +moment().week();
    container_tag += '<li class="list-group-item"><div class="row"><h4 class="col date_tag">Sun - '+moment().day(0).date()+'</h4><div class="col event_tag">Event<div></div></div></li>'
    +'<li class="list-group-item"><div class="row"><h4 class="col date_tag">Mon - '+moment().day(1).date()+'</h4><div class="col event_tag">Event<div></div></div></li>'
    +'<li class="list-group-item"><div class="row"><h4 class="col date_tag">Tue - '+moment().day(2).date()+'</h4><div class="col event_tag">Event<div></div></div></li>'+
    '<li class="list-group-item"><div class="row"><h4 class="col date_tag">Wed - '+moment().day(3).date()+'</h4><div class="col event_tag">Event<div></div></div></li>'
    +'<li class="list-group-item"><div class="row"><h4 class="col date_tag">Thu - '+moment().day(4).date()+'</h4><div class="col event_tag">Event<div></div></div></li>'
    +'<li class="list-group-item"><div class="row"><h4 class="col date_tag">Fri - '+moment().day(5).date()+'</h4><div class="col event_tag">Event<div></div></div></li>'
    +'<li class="list-group-item"><div class="row"><h4 class="col date_tag">Sat - '+moment().day(6).date()+'</h4><div class="col event_tag">Event<div></div></div></li>';
    container_el.innerHTML = container_tag;
}



todaysDate();
init()
