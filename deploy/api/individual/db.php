<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");

$dsn = 'mysql:host=host166766.hostido.net.pl;dbname=host166766_mlodyalbert;charset=utf8mb4';
$username = 'host166766_mlodyalbert_user';
$password = 'ZvYJhGKhxLzZsMsVyDXr';

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die('Connection failed: ' . $e->getMessage());
}
?>
