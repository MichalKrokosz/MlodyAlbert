<?php
$errors = [];

// Validate parentFirstName and parentLastName (assuming they are required)
if (empty($data['parentFirstName'])) {
    $errors[] = "Parent's first name is required.";
}

if (empty($data['parentLastName'])) {
    $errors[] = "Parent's last name is required.";
}

// Validate tel (telephone number)
if (empty($data['tel'])) {
    $errors[] = "Telephone number is required.";
} elseif (!preg_match('/^\d{8,15}$/', $data['tel'])) {
    $errors[] = "Telephone number should be between 8 to 15 digits.";
}

// Validate childFirstName and childLastName (assuming they are required)
if (empty($data['childFirstName'])) {
    $errors[] = "Child's first name is required.";
}

if (empty($data['childLastName'])) {
    $errors[] = "Child's last name is required.";
}

// Validate birthdate
$birthDay = (int) $data['birthDay'];
$birthMonth = (int) $data['birthMonth'];
$birthYear = (int) $data['birthYear'];

if (!checkdate($birthMonth, $birthDay, $birthYear)) {
    $errors[] = "Invalid birthdate.";
} else {
    // Optionally, you can check if the birthdate makes sense (e.g., not in the future)
    $today = new DateTime();
    $birthdate = new DateTime("$birthYear-$birthMonth-$birthDay");
    if ($birthdate > $today) {
        $errors[] = "Birthdate cannot be in the future.";
    }
}

// Validate email
if (empty($data['email'])) {
    $errors[] = "Email is required.";
} elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Invalid email format.";
}

// Validate statute (assuming it's a boolean)
if (!isset($data['statute']) || !is_bool($data['statute'])) {
    $errors[] = "Statute acceptance is required.";
}


// Output validation results
if (!empty($errors)) {
    // There are validation errors, handle them (e.g., log them, return them as JSON response)
    $response = [
        'status' => 'error',
        'errors' => $errors
    ];
    die(json_encode($response));
} 

?>