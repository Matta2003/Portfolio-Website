<?php 
$Voornaam = $_POST["Voornaam"];
$Achternaam = $_POST["Achternaam"];
$Email = $_POST["Email"];
$Telefoon = $_POST["Telefoon"];
$Lijst = $_POST["Lijst"];
$Bericht = $_POST["Bericht"];

$host = "localhost";
$dbname = "bericht_db";
$username = "root";
$password = "";

$conn = mysqli_connect($host, $username, $password, $dbname );

if (mysqli_connect_errno()) {
    die("Connection error: " . mysqli_connect_error());
} else {
    echo "Connection successful.";
}

$sql = "INSERT INTO bericht (voornaam, achternaam, email, telefoon, lijst, berichtje)
    VALUES (?, ?, ?, ?, ?, ?)";
$stmt = mysqli_stmt_init($conn);

if ( ! mysqli_stmt_prepare($stmt, $sql)) {
     die(mysqli_error($conn));
	
}
mysqli_stmt_bind_param($stmt, "ssssis", $Voornaam, $Achternaam, $Email ,$Telefoon, $Lijst, $Bericht);

mysqli_stmt_execute($stmt);

echo "Bericht verzonden.";


?>