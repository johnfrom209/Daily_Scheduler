var now = moment().format("H00");

$(document).ready(function () {

    //this displays the time 
    var currentDay = $("#currentDay");
    currentDay.text(moment().format("dddd, MMMM Do"));

    // Current Time
    // Here we want to use setInterval to constantly update the time
    let updateTime = function () {
        let currentTime = moment().format('h:mm:ss');
        //change this to set a var and use that to update past, present and future
        $("#time").text(currentTime);
    }

    // To initally set the times, we will call the functions
    updateTime();

    // To continuously call the functions, we will use setInterval
    setInterval(updateTime, 1000);
    setInterval(timeDisplay, 60000); // check every min

    // displayUpdate();
    checkTime();

    //display the saved text
    displayToScreen();

    loadfromLS();
})

function timeDisplay() {

    if (moment().format("H00") > Number(now)) {
        now = moment().format("H00");
        checkTime();
    }
}

function displayUpdate() {

    $(".displayHour").each(function () {
        $(this).parent().siblings(".description").removeClass("present").removeClass("past").removeClass("future");
    });
};

//grabs all classes with displayHour
function checkTime() {

    if (now <= 1700 && now >= 900) {
        $(".displayHour").each(function () {
            if ($(this).attr("id") == Number(now)) {
                $(this).parent().siblings(".description").addClass("present").removeClass("past").removeClass("future");
            }
            else if ($(this).attr("id") > Number(now)) {
                $(this).parent().siblings(".description").addClass("future");
            }
            else if ($(this).attr("id") < Number(now)) {
                $(this).parent().siblings(".description").addClass("past").removeClass("future").removeClass("present");
            }
        });
    }
}

$(".saveBtn").on("click", function () {

    //use this to save to the object
    var saveId = $(this).siblings(".timeDisplay").children().attr("id");
    //grabbing object 
    var day = loadfromLS();
    //this saves the property that is saveId to the val in the text area
    day[saveId] = $(this).siblings(".description").val();

    //save to LS
    saveToLS(day);
});

function loadfromLS() {

    //load from LS
    var info = JSON.parse(localStorage.getItem("Day"));
    //if nothing in the save create object with time properties
    if (info == null) {
        info = {
            900: "",
            1000: "",
            1100: "",
            1200: "",
            1300: "",
            1400: "",
            1500: "",
            1600: "",
            1700: "",
        }
    }
    return info;
}

function saveToLS(day) {
    localStorage.setItem("Day", JSON.stringify(day))
}

function displayToScreen() {

    var day = loadfromLS();
    $(".displayHour").each(function () {
        //grab the id
        var tempId = $(this).attr("id");
        //sets the textarea from the saved data
        $(this).parent().siblings(".description").val(day[tempId]);
    });

}