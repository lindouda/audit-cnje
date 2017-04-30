<p>
	<hr/>
			
		<?php

		$con = mysqli_connect('localhost','root','');
		if (!$con) {
			die('Could not connect: ' . mysqli_error($con));
		}

		mysqli_select_db($con,"audit");
		$id = $_GET['auditeurId'];
		$sql="SELECT * FROM auditeurs WHERE id=" . $id;
		$auditeur = mysqli_query($con,$sql);
		$row = $auditeur->fetch_array();
		$sql="SELECT * FROM juniors WHERE id=" . $row['id'];
		$junior = mysqli_query($con,$sql);

		echo "<text style=\"float: left;\">Nom</text>";
		echo "<text style=\"float: right;\" id=\"field\">" . $row['nom'] . "</text><br/>";
		echo "<text style=\"float: left;\">Mail</text>";
		echo "<text style=\"float: right;\" id=\"field\">" . $row['mail'] . "</text><br/>";
		echo "<text style=\"float: left;\">Telephone</text>";
		echo "<text style=\"float: right;\" id=\"field\">" . $row['telephone'] . "</text><br/>";
		echo "<text style=\"float: left;\">Junior</text>";
		echo "<text style=\"float: right;\" id=\"field\">" . $junior->fetch_array()['nom'] . "</text><br/>";
	
		if($row['competence'] == 0) {
			echo "<text style=\"float: left;\">Competence</text>";
			echo "<text style=\"float: right;\" id=\"field\">Orga</text><br/>";
		}
		elseif($row['competence'] == 1) {
			echo "<text style=\"float: left;\">Competence</text>";
			echo "<text style=\"float: right;\" id=\"field\">Treso</text><br/>";
		}
		else {
			echo "<text style=\"float: left;\">Competence</text>";
			echo "<text style=\"float: right;\" id=\"field\">Double</text><br/>";
		}
		
		if($row['CNJE'] == 0) {
			echo "<text style=\"float: left;\">CNJE</text>";
			echo "<text style=\"float: right;\" id=\"field\">Non</text><br/>";
		}
		else {
			echo "<text style=\"float: left;\">CNJE</text>";
			echo "<text style=\"float: right;\" id=\"field\">Oui</text><br/>";
		}
		
		mysqli_close($con);
		?>
		
	<hr/>
	<text style="float: left;">Historique</text>
	<text style="float: right;" id="field">SEGMA</text>
	<br/>
	<text style="float: right;" id="field">KSI Centrale Marseille</text>
	<br/>
	<text style="float: right;" id="field">Nsigma</text>
	<br/>
	<hr/>
	<text style="float: left;">Prochaines disponibilités</text>
	<text style="float: right;" id="field">25/04/2017</text>
	<br/>
	<text style="float: right;" id="field">05/04/2017</text>
	<br/>
	<text style="float: right;" id="field">15/04/2017</text>
	<br/>
</p>