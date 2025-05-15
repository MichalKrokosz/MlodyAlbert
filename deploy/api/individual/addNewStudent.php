<?php
include("db.php");

$data = json_decode(file_get_contents('php://input'), true);


//Sprawdzenie czy nie zostaly zarezerwowane godziny przez kogos innego
$sql = "SELECT * FROM LESSONS WHERE 1=0";
$params = [];
if (!empty($data['hours'][0])) {
    $sql .= " OR (id = :hour0 AND studentID != 0)";
    $params[':hour0'] = $data['hours'][0];
}
if (!empty($data['hours'][1])) {
    $sql .= " OR (id = :hour1 AND studentID != 0)";
    $params[':hour1'] = $data['hours'][1];
}
if (!empty($data['hours'][2])) {
    $sql .= " OR (id = :hour2 AND studentID != 0)";
    $params[':hour2'] = $data['hours'][2];
}
$stmt = $pdo->prepare($sql);
$stmt->execute($params);
$count = $stmt->fetchColumn();
if ($count > 0) {
    die("2");
}

$recommendation = $data['recommendation'];
if($data['recommendation'] == "Przez znajomego"){
    $recommendation = $data['recommendationName'];
}

//utworzenie uzytkownika
$sql = "INSERT INTO `STUDENTS` (firstName, lastName, parentFirstName, parentLastName, birthdate, email, tel, recommendation, usedDiscount, registrationTime) VALUES (:firstName, :lastName, :parentFirstName, :parentLastName, :birthdate, :email, :tel, :recommendation, :usedDiscount, now());";
$stmt = $pdo->prepare($sql);
$birthdate = $data['birthYear'] . "-" . $data['birthMonth'] . "-" . $data['birthDay'];

$stmt->bindParam(':firstName', $data['childFirstName']);
$stmt->bindParam(':lastName', $data['childLastName']);
$stmt->bindParam(':parentFirstName', $data['parentFirstName']);
$stmt->bindParam(':parentLastName', $data['parentLastName']);
$stmt->bindParam(':birthdate', $birthdate);
$stmt->bindParam(':email', $data['email']);
$stmt->bindParam(':tel', $data['tel']);
$stmt->bindParam(':recommendation', $recommendation);
$stmt->bindParam(':usedDiscount', $data['discount']);

// Execute the statement
if ($stmt->execute()) {
    $lastInsertId = $pdo->lastInsertId();
} else {
    die("1");
}

if($lastInsertId == 0){
    die("1");
}

//rezerwacja godzin
foreach ($data['hours'] as $hour) {
    $sql = "UPDATE `LESSONS` SET `studentID` = :lastInsertId WHERE `LESSONS`.`id` = :hour;";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':lastInsertId', $lastInsertId);
    $stmt->bindParam(':hour', $hour);
    if (!$stmt->execute()) {
        die("1");
    }
}

include("email.php");

echo "0";
?>