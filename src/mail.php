<?php
require 'root/root.php';

$modal__userName = $_POST['modal__userName'];
$modal__userPhone = $_POST['modal__userPhone'];
$modal__userEmail = $_POST['modal__userEmail'];

$hero__userName = $_POST['hero__userName'];
$hero__userPhone = $_POST['hero__userPhone'];

$questions__userName = $_POST['questions__userName'];
$questions__userPhone = $_POST['questions__userPhone'];

$userName = '';
$userPhone = '';
$userEmail = '';

if (!empty($modal__userName)) {
    $userName = $modal__userName;
    $userPhone = $modal__userPhone;
    $userEmail = $modal__userEmail;
} else if(!empty($hero__userName)) {
    $userName = $hero__userName;
    $userPhone = $hero__userPhone;
} else if(!empty($questions__userName)) {
    $userName = $questions__userName;
    $userPhone = $questions__userPhone;
}

if (!empty($userEmail)) {
    $body = "Имя пользователя: ${userName}, его телефон: ${userPhone}. Его почта: ${userEmail}";
} else {
    $body = "Имя пользователя: ${userName}, его телефон: ${userPhone}";
}

// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'ligadancekrd@gmail';                     // SMTP username
    $mail->Password   = 'ligadancekrd@gmail.compass2pass';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to
    
    //Recipients
    $mail->setFrom('ligadancekrd@gmail.com');
    $mail->addAddress('ivananapa@mail.ru');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = $body;

    if($mail->send()) {
        echo 'ok';
    } else {
        echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    }
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}