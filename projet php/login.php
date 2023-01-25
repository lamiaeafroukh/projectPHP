<?php 
//connexion en base donner de login
try{
$conn=new PDO('mysqli:host=localhost;dbname=login',"root","");}
catch(Exception $e){
    die('erreur :'.$e->getMessage());
}
$nom=$_POST('name');
$prenom=$_POST('prenom');$email=$_POST('email');$date=$_POST('date');$telephone=$_POST('telephone');
//insertion donnes au bd
$sql='
INSERT INTO client(nom,prenom,email,telephone,date) VALUES(?,?,?,?)
';
$requet=$conn->prepare($sql);
$requet->execute(array($nom,$prenom,$email,$telephone,$date));




?>