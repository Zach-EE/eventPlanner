console.log("Loaded");

var currentDay_el = document.getElementById("currentDay");
var container_el = document.querySelector(".container");
var hr0900 = $("#09");
var hr1000 = $("#10");
var hr1100 = $("#11");
var hr1200 = $("#12");
var hr1300 = $("#13");
var hr1400 = $("#14");
var hr1500 = $("#15");
var hr1600 = $("#16");
var hr1700 = $("#17");
var saveBtn =$(".saveBtn");

var time = moment();

//* Initialize planner application and prints date header and localStorage values 
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

function timeColor() {
    hour = time.hours();
    $(".time-block").each(function () {
        var timeNow = parseInt($(this).attr("id"));
        if (timeNow > hour){
            $(this).addClass("future");
        }else if (timeNow === hour){
            $(this).addClass("present");
        }else{
            $(this).addClass("past")
        }
    })
}

timeColor();