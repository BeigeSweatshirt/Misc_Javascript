"use strict";
const $ = selector => document.querySelector(selector);

/*********************
*  helper functions  *
**********************/
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;

const toggleDisplay = (label1Text, label2Text) => {
	$("#degree_label_1").textContent=label1Text;
	$("#degree_label_2").textContent=label2Text;
}

/****************************
*  event handler functions  *
*****************************/
const convertTemp = () => {
	const input = parseFloat($("#degrees_entered").value);
	if ($("#to_celsius").checked) $("#degrees_computed").value=calculateCelsius(input);
	else $("#degrees_computed").value=calculateFahrenheit(input);

	if (!Number.isNaN(input)) $('#invalid_input').textContent="";
	else $('#invalid_input').textContent="Invalid input. Please enter a real number.";
};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
	
	// move focus
	$("#degrees_entered").focus();
});