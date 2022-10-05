

$(document).ready(function () {

    //this displays the time 
    var currentDay = $("#currentDay");
    currentDay.text(moment().format("dddd, MMMM Do"));

    // Current Time
    // Here we want to use setInterval to constantly update the time
    let updateTime = function () {
        let currentTime = moment().format('h:mm:ss')
        //change this to set a var and use that to update past, present and future
        $("#time").text(currentTime)
    }

    // To initally set the times, we will call the functions
    updateTime();

    // To continuously call the functions, we will use setInterval
    setInterval(updateTime, 1000);
})