<?php 

match($_SERVER["REQUEST_URI"]){
    "/api/armies/darkangels" => require __DIR__ . "/api/armies/dark-angels/get_units.php",
    default => throw new Exception("Route not found")
};