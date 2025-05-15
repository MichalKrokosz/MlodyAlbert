<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$daysPL = [
    1 => 'Poniedziałki',
    2 => 'Wtorki',
    3 => 'Środy',
    4 => 'Czwartki',
    5 => 'Piątki',
    6 => 'Soboty',
    7 => 'Niedziele'
];


$sql = "SELECT LESSONS.day, LESSONS.writeTime, LESSONS.mode, TUTORS.name FROM LESSONS INNER JOIN TUTORS ON LESSONS.tutorID=TUTORS.id WHERE 1=0";
$params = [];


if (!empty($data['hours'][0])) {
    $sql .= " OR LESSONS.id = :hour0";
    $params[':hour0'] = $data['hours'][0];
}
if (!empty($data['hours'][1])) {
    $sql .= " OR LESSONS.id = :hour1";
    $params[':hour1'] = $data['hours'][1];
}
if (!empty($data['hours'][2])) {
    $sql .= " OR LESSONS.id = :hour2";
    $params[':hour2'] = $data['hours'][2];
}

// Przygotowanie zapytania
$stmt = $pdo->prepare($sql);
$stmt->execute($params);

// Pobranie wszystkich rekordów jako tablica asocjacyjna
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);


//Load Composer's autoloader
require '../vendor/autoload.php';

include 'head.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);



try {
    //Server settings
    $mail->isSMTP();                                
    $mail->Host       = 'host166766.hostido.net.pl';
    $mail->SMTPAuth   = true;                       
    $mail->Username   = 'automat@mlodyalbert.pl';   
    $mail->Password   = 'bardzotajnehaslo123';      
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;                        
    $mail->setFrom('automat@mlodyalbert.pl', 'Młody Albert');
    $mail->addAddress($data['email']);


    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';
    //Content
    $mail->isHTML(true);    
    $mail->ContentType = 'text/html'; 
    $mail->Subject = 'Potwierdzenie zapisu do grupy';
    $html = '
    <body>
    <div class="row">
    <div class="container" style="text-align: center;">
        <h2>Zapisałeś swoje dziecko na zajęcia do: ' . $results[0]['name'] . '</h2>
        <p>Dzień dobry, dziękujemy za wybór korepetycji u Młodego Alberta. Państwa zgłoszenie zostało przyjęte. Skontaktujemy sie z Państwem najszybciej jak to możliwe w celu zweryfikowania zgloszenia. Jeśli mają Państwo pytania odpowiemy na nie podczas rozmowy.</p>
        <p>Pozdrawiamy, Zespół Młodego Alberta.</p>
    </div>
    <div class="column">
        <h2>Dane<br>opiekuna</h2>
        <p class="fakeLabel">Imię</p>
        <p class="fakeInput">' . $data["parentFirstName"] . '</p>
        
        <p class="fakeLabel">Nazwisko</p>
        <p class="fakeInput">' . $data['parentLastName'] . '</p>
        
        <p class="fakeLabel">Numer telefonu</p>
        <p class="fakeInput">' . $data['tel'] . '</p>
    </div>
    <div class="column">
        <h2>Dane<br>uczestnika</h2>
        <p class="fakeLabel">Imię</p>
        <p class="fakeInput">' . $data['childFirstName'] . '</p>
        
        <p class="fakeLabel">Nazwisko</p>
        <p class="fakeInput">' . $data['childLastName'] . '</p>
        
        <p class="fakeLabel">Data urodzenia</p>
        <p class="fakeInput">' . $data['birthDay'] . '.' . $data['birthMonth'] . '.' . $data['birthYear'] . '</p>
    </div>
    <div class="container">
        <p class="fakeLabel">Email</p>
        <p class="fakeInput">' . $data['email'] . '</p>
        
        <p class="fakeLabel">Skąd wiesz o Młodym Albercie?</p>
        <p class="fakeInput">' . $recommendation . '</p>

        <p class="fakeLabel">Kod rabatowy</p>
        <p class="fakeInput">' . $data['discount'] . '</p>
        
        <p class="fakeLabel">Zarezerwowane godziny</p>
        <p class="fakeInput">';

    foreach ($results as $row) {
        $html .= $daysPL[$row["day"]] . ' - ' . $row["writeTime"] . '<br>';
    }

    $html .= '</p></div>
    </div>
    </body>
    </html>';

    $mail->Body =$head . $html;
    $mail->AltBody = 'Jeśli nie widzisz graficznej treści wiadomości tylko to, chcemy poinformować że odezwiemy się niedługo w sprawie potwierdzenia rezerwacji';

    $mail->send();
} catch (Exception $e) {
    die("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
}

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
try {
  //Server settings
  $mail->isSMTP();                                
  $mail->Host       = 'host166766.hostido.net.pl';
  $mail->SMTPAuth   = true;                       
  $mail->Username   = 'automat@mlodyalbert.pl';   
  $mail->Password   = 'bardzotajnehaslo123';      
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
  $mail->Port       = 465;                        
  $mail->setFrom('automat@mlodyalbert.pl', 'Młody Albert');
  //$mail->addAddress('mlodyalbert.ma@gmail.com');
  $mail->addAddress('michalsonsiema@gmail.com');

  
  $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64'; // You can also use 'quoted-printable'
    //Content
    $mail->isHTML(true);    
    $mail->ContentType = 'text/html'; 
  $mail->Subject = $data['childFirstName'] . " " . $data['childLastName'];
  $html = '
  <body>
  <div class="row">
  <div class="container" style="text-align: center;">
    <h2>Zapis do: ' . $results[0]['name'] . '</h2>
  </div>
  <div class="column">
      <h2>Dane<br>opiekuna</h2>
      <p class="fakeLabel">Imię</p>
      <p class="fakeInput">' . $data["parentFirstName"] . '</p>
      
      <p class="fakeLabel">Nazwisko</p>
      <p class="fakeInput">' . $data['parentLastName'] . '</p>
      
      <p class="fakeLabel">Numer telefonu</p>
      <p class="fakeInput">' . $data['tel'] . '</p>
  </div>
  <div class="column">
      <h2>Dane<br>uczestnika</h2>
      <p class="fakeLabel">Imię</p>
      <p class="fakeInput">' . $data['childFirstName'] . '</p>
      
      <p class="fakeLabel">Nazwisko</p>
      <p class="fakeInput">' . $data['childLastName'] . '</p>
      
      <p class="fakeLabel">Data urodzenia</p>
      <p class="fakeInput">' . $data['birthDay'] . '.' . $data['birthMonth'] . '.' . $data['birthYear'] . '</p>
  </div>
  <div class="container">
      <p class="fakeLabel">Email</p>
      <p class="fakeInput">' . $data['email'] . '</p>

      <p class="fakeLabel">Skąd wiesz o Młodym Albercie?</p>
      <p class="fakeInput">' . $recommendation . '</p>

      <p class="fakeLabel">Kod rabatowy</p>
      <p class="fakeInput">' . $data['discount'] . '</p>

      <p class="fakeLabel">Zarezerwowane godziny</p>
      <p class="fakeInput">';

  foreach ($results as $row) {
    $html .= $daysPL[$row["day"]] . ' - ' . $row["writeTime"] . '<br>';
  }

  $html .= '</p></div>
  </div>
  </body>
  </html>';

  $mail->Body =$head . $html;
  $mail->AltBody = 'Jeśli nie widzisz graficznej treści wiadomości tylko to, chcemy poinformować że odezwiemy się niedługo w sprawie potwierdzenia rezerwacji';

  $mail->send();
} catch (Exception $e) {
  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}