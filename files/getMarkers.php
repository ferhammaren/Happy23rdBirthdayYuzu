<?php
require("phpsqlinfo_dbinfo.php");

function parseToXML($htmlStr)
{
$xmlStr=str_replace('<','&lt;',$htmlStr);
$xmlStr=str_replace('>','&gt;',$xmlStr);
$xmlStr=str_replace('"','&quot;',$xmlStr);
$xmlStr=str_replace("'",'&#39;',$xmlStr);
$xmlStr=str_replace("&",'&amp;',$xmlStr);
return $xmlStr;
}


$connection=new mysqli ($servername, $username, $password,$database);
if (!$connection) {
  die('Not connected : ' . mysql_error());
}


$query = "SELECT * FROM `satelliteMarkers` ";
$result=$connection->prepare($query);
$result->execute();
if (!$result) {
  die('Invalid query: ' . mysql_error());
}else{
$result->store_result();
//$result=$result->get_result();
$result->bind_result($id,$name,$message,$lat,$lng,$type);
header("Content-type: text/xml");
echo '<markers>';
<<<<<<< HEAD
while ($result->fetch()){
=======
while ($row = $result->mysqli_fetch_assoc()){
>>>>>>> a7a32b62a5e532adb016ce32ce4f1055a1108e7b
  echo '<marker id="' . $id . '" ';
  echo 'name="' . parseToXML($name) . '" ';
  echo 'message="' . parseToXML($message) . '" ';
  echo 'lat="' . $lat . '" ';
  echo 'lng="' . $lng . '" ';
  echo 'type="' . $type . '" ';
  echo '/>';
}

// End XML file
echo '</markers>';
}
?>