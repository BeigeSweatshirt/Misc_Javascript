"use strict";

$(document).ready( () => {
	$("#arrival_date").focus();

	$("#reservation_form").submit( e => {
		let isValid = true;
		
		const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		
		const arrival_date = $("#arrival_date").val().trim();
		$("#arrival_date").val(arrival_date)
		
		const nights = $("#nights").val().trim();
		$("#nights").val(nights);
		
		const email = $("#email").val().trim();
		$("#email").val(email);
		
		const name = $("#name").val().trim();
		$("#name").val(name)
		
		const phone = $("#phone").val().trim();
		$("#phone").val(phone)
		
		if ($.isNumeric(nights) == false) isValid = false;
		if (!emailPattern.test(email)) isValid = false;
		if (!name || !phone || !arrival_date) isValid = false;
		if (!isValid) e.preventDefault();
	});
}); // end ready