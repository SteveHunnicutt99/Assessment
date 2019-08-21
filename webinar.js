window.addEventListener('DOMContentLoaded', (event) => {
	updateTimeRemaining();
});

function updateTimeRemaining() {
	// Get current date and the date and time of the webinar as instructed
	var currentDate = new Date();
	var webinarDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 5, 0, 0, 0, 0);
	
	var dateInterval = Math.abs(webinarDate - currentDate) / 1000;
	
	// Calculate the days in the interval, then subtract them
	var days = Math.floor(dateInterval / 86400);
	dateInterval -= days * 86400;
	
	// same for hours
	var hours = Math.floor(dateInterval / 3600) % 24;
	dateInterval -= hours * 3600;
	
	var minutes = Math.floor(dateInterval / 60) % 60;
	
	// Update the time remaining on the page
	document.getElementById("timeRemaining").innerText = days + " Days, " + hours + " hours, " + minutes + " minutes";
	
	// Then set a timeout to do it again in a minute
	setTimeout(function () {
		updateTimeRemaining();
	}, 60*1000);
}

function sameBox(checkboxElem) {
	// This function is triggered when the value for either checkbox is changed
	// It sets the other checkbox to the same value as the one that was changed
	if (checkboxElem.id == "register1") {
		document.getElementById("register2").checked = checkboxElem.checked;
	} else {
		document.getElementById("register1").checked = checkboxElem.checked;
	}
}

function submitRegistration() {
	// This function checks that the first checkbox has been checked
	// (because of the sameBox function, it assumes that both checkboxes have the same value)
	// If checkboxes are checked, submit the request to the URL provided in the instructions
	// Otherwise, alert the user
	if (document.getElementById("register1").checked) {
	    var xhttp = new XMLHttpRequest();
	    xhttp.onreadystatechange = function() {
	    	// Parse the response object, then parse the body to get the submitok value
	    	// Populate both response elements with the submitok value
	        if (this.readyState == 4 && this.status == 200) {
	        	var responseObject = JSON.parse(this.responseText);
				var responseBody = JSON.parse(responseObject.body);
				document.getElementById("response1").innerText = responseBody.submitok;
				document.getElementById("response2").innerText = responseBody.submitok;
	       }
	    };
		xhttp.open("GET", "https://bl45immth4.execute-api.us-east-1.amazonaws.com/production/", true);
	    xhttp.send();
	} else {
		alert("Please check the box for your free newsletter to register.");
	}
}

/*
1. Get current date and time
2. Get object for date five days from current date at midnight
3. Get difference between date1 and date2
4. Parse Days, hours, minutes from difference
5. Display in the timeRemaining element
6. BONUS: update every minute
*/