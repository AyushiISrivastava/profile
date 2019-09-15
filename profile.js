document.getElementById("button").addEventListener("click", function(event){
	event.preventDefault();
	if(document.getElementById("username").value == ''){
		var snackBar = document.getElementById("snackbar");
   	    snackBar.className = "show";
	    snackBar.innerHTML = "Please enter name";
  		setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
  		return;
	}
	if(document.getElementById("phno").value == ''){
		var snackBar = document.getElementById("snackbar");
   	    snackBar.className = "show";
	    snackBar.innerHTML = "Please enter phone number";
  		setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
  		return;
	} else if(document.getElementById("phno").value.length < 10 || document.getElementById("phno").value.length > 10){
		var snackBar = document.getElementById("snackbar");
   	    snackBar.className = "show";
	    snackBar.innerHTML = "Please enter a valid phone number";
  		setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
  		return;
	} 
	if(document.getElementById("email").value == ''){
		var snackBar = document.getElementById("snackbar");
   	    snackBar.className = "show";
	    snackBar.innerHTML = "Please enter email id";
  		setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
  		return;
	} else {
	    var regularExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    if(!regularExpression.test(document.getElementById("email").value)){
			var snackBar = document.getElementById("snackbar");
	   	    snackBar.className = "show";
		    snackBar.innerHTML = "Please enter a valid email id";
	  		setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
	  		return;
  		}
	}
	if(document.getElementById("title").value == ''){
		var snackBar = document.getElementById("snackbar");
   	    snackBar.className = "show";
	    snackBar.innerHTML = "Please enter job title";
  		setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
  		return;
	}
	if(document.getElementById("resume").files.length == 0){
		var snackBar = document.getElementById("snackbar");
   	    snackBar.className = "show";
	    snackBar.innerHTML = "Please select resume";
  		setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
  		return;
	}
});

function preventInput(evnt) {
	if(evnt.which != 8){
		if (evnt.which < 48 || evnt.which >57){ 
		evnt.preventDefault();
		return;
		}
	}
}