"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    console.log("hello world!");
    // get date
    const date = new Date();
    let hours = date.getHours();
    const mins = padSingleDigit(date.getMinutes());
    const secs = padSingleDigit(date.getSeconds());

    // convert military to civvy time
    if (hours > 12) {
        hours = padSingleDigit(hours-12);
        $("#ampm").innerHTML = "PM";
    } else $("#ampm").innerHTML = "AM";

    // print to page
    $("#hours").innerHTML = hours;
    $("#minutes").innerHTML = mins;
    $("#seconds").innerHTML = secs;
};

document.addEventListener("DOMContentLoaded", () => {
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000); 
	// set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
});