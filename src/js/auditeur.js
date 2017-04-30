window.onload = loadAuditeur;

function loadAuditeur() {
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("infoAuditeur").innerHTML = this.responseText;
			
		}
	};
	var url = window.location.href;
	var parameters =  url.substring(url.indexOf('?'), url.length);
	var phpurl = "http://localhost/audit-cnje/src/php/findAuditeur.php"+parameters;
	xmlhttp.open("GET",phpurl,true);
	xmlhttp.send();
	
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var auditeurspicker = document.getElementById("auditeurspicker");
			auditeurspicker.innerHTML = this.responseText;
			$('.selectpicker').selectpicker('refresh');
		}
	};
	xmlhttp.open("GET","http://localhost/audit-cnje/src/php/selectauditeurs.php",true);
	xmlhttp.send();
}

function searchAuditeur() {
	window.location.href = "./auditeur.html?auditeurId="+document.getElementById("auditeurspicker").value;
}