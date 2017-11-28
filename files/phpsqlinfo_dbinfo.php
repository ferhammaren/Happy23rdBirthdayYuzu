<?php
$servername="localhost";
$username="planetHanyu";
$password="Onmyouji1207";
$database="planethanyu";


if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');
    }
?>