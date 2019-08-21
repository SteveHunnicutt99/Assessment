function sameBox(checkboxElem) {	
	if (checkboxElem.id == "register1") {
		document.getElementById("register2").checked = checkboxElem.checked;
	} else {
		document.getElementById("register1").checked = checkboxElem.checked;
	}
}

function submitRegistration() {
	if (document.getElementById("register1").checked) {
	    var xhttp = new XMLHttpRequest();
	    xhttp.onreadystatechange = function() {
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