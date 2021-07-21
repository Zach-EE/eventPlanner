console.log("Loaded");

var currentDay_el = document.getElementById("currentDay");
var container_el = document.querySelector(".container");
var hr0900 = $("#0900");
var hr1000 = $("#1000");
var hr1100 = $("#1100");
var hr1200 = $("#1200");
var hr1300 = $("#1300");
var hr1400 = $("#1400");
var hr1500 = $("#1500");
var hr1600 = $("#1600");
var hr1700 = $("#1700");
var saveBtn =$(".saveBtn");

var time = moment();
//Display Todays Date info in page banner
// function todaysDate(){
//     counter = setInterval(timer, 1000);
//     function timer(){
//         currentDay_el.innerHTML = moment();
//         console.log("----Loaded Current Date----");
//     }
// }
// todaysDate();

function init(){
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    $(".time-block").each(function () {
        var id =$(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

init();