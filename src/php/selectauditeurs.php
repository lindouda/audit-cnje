<?php

$con = mysqli_connect('localhost','root','');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"audit");
$sql="SELECT * FROM auditeurs";
$result = mysqli_query($con,$sql);
while($row = $result->fetch_array()){
	echo "<option value=" . $row['id'] . ">" . $row['nom'] . "</option>";
}
mysqli_close($con);
?>