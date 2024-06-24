<?php
// cors stuff
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$pdo = new PDO("mysql:host=db;dbname=hammerbro", 'hammerbro', 'hammerbro');

$result = $pdo->query("SELECT * FROM darkAngelsUnits");
$units = $result->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($units);
