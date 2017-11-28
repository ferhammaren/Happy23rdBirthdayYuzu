<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/javascript');
require("phpsqlinfo_dbinfo.php");
// Gets data from URL parameters.
$name = $_GET['name'];
$address = $_GET['address'];
$lat = $_GET['lat'];
$lng = $_GET['lng'];
$type = $_GET['type'];
$connection=new mysqli ("127.0.0.1", $username, $password,$database);
if (!$connection) {
  die('Not connected : ' . mysql_error());
}
// $db_selected = mysql_select_db($database, $connection);
// if (!$db_selected) {
//   die ('Can\'t use db : ' . mysql_error());
// }
$result=$connection->prepare('CALL addMarker(?,?,?,?,?,@name,@message,@lat,@lng,@type)');
$result->bind_param("ssdds",$name,$address,$lat,$lng,$type);
$result ->execute();
if (!$result) {
  die('Invalid query: ' . mysqli_error($connection));
}
header("Access-Control-Allow-Origin: *");
?>