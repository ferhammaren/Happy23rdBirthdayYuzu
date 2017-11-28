<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/javascript');
require("phpsqlinfo_dbinfo.php");
// Gets data from URL parameters.
$name = $_GET['name'];
$message = $_GET['address'];
$lat = $_GET['lat'];
$lng = $_GET['lng'];
$type = $_GET['type'];
$connection=new mysqli ("127.0.0.1", $username, $password,$database);
if (!$connection) {
  die('Not connected : ' . mysql_error());
}


$query="call addMarker(?,?,?,?,?)";
$result=$connection->prepare($query);

$result->bind_param("ssdds",$name,$message,$lat,$lng,$type);
$result ->execute();
if (!$result) {
  die('Invalid query: ' . mysqli_error($connection));
}
header("Access-Control-Allow-Origin: *");
?>