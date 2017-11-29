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


$connection=new mysqli ("127.0.0.1", $username, $password,$database);
if (!$connection) {
  die('Not connected : ' . mysql_error());
}


$query = "CALL selectMarkers()";
$result=$connection->prepare($query);
$result->execute();
if (!$result) {
  die('Invalid query: ' . mysql_error());
}else{
//$result->store_result();
$result=$result->get_result();
header("Content-type: text/xml");
echo '<markers>';
while ($row = mysqli_fetch_assoc($result)){
  echo '<marker id="' . $id . '" ';
  echo 'name="' . parseToXML($row['name']) . '" ';
  echo 'message="' . parseToXML($row['message']) . '" ';
  echo 'lat="' . $row['lat'] . '" ';
  echo 'lng="' . $row['lng'] . '" ';
  echo 'type="' . $row['type'] . '" ';
  echo '/>';
}

// End XML file
echo '</markers>';
}
?>
