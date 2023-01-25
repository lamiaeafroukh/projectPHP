<?php 
//connexion en base donner de login


$servername = "localhost";
$username = "root";
$password = "";

$conn = new PDO("mysql:host=$servername;dbname=login",
    $username, $password) ;


$nom=$_POST['nom'];
$prenom=$_POST['prenom'];
$email=$_POST['email']; 
$date=$_POST['date'];
$telephone=$_POST['telephone'];
//insertion donnes au bd

$requet=$conn->prepare('INSERT INTO client(nom,prenom,email,telephone,date) VALUES(?,?,?,?,?)');
$requet->execute(array($nom,$prenom,$email,$telephone,$date));




?>