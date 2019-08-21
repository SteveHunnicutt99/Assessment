function sameBox(checkboxElem) {	
	if (checkboxElem.name == "register1") {
		document.getElementsByName("register2")[0].checked = checkboxElem.checked;
	} else {
		document.getElementsByName("register1")[0].checked = checkboxElem.checked;
	}
}

function submitRegistration() {
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
}