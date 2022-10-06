var now = moment().format("H");

now = 1100;

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

    // displayUpdate();
    checkTime();
})

function displayUpdate() {

    $(".displayHour").each(function () {
        $(this).parent().siblings(".description").removeClass("present").removeClass("past").removeClass("future");
    });
};

function checkTime() {

    $(".displayHour").each(function () {

        if (now <= 1700 && now >= 900) {
            if ($(this).attr("id") == now) {

                $(this).parent().siblings(".description").addClass("present");
            }
            else if ($(this).attr("id") <= now) {
                $(this).parent().siblings(".description").addClass("past");
            }
            else {
                $(this).parent().siblings(".description").addClass("future");
            }
        }
    });

}




