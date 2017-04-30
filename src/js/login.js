function login() {
	var email = document.getElementById("inputEmail").value;
	var psw = document.getElementById("inputPassword").value;
	
    if(email.localeCompare("audit@cnje.org") == 0){
		window.location.href = "./vue-generale.html";
	} else {
		alert("Mail inconnu");
	}
}