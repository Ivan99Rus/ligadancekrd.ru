<?php 
$name = $_POST["user-name"];
$phone = $_POST["user-phone"];
$email = $_POST["user-email"];

$to  = "ivananapa@mail.ru" ; 

$subject = "Заявка с сайта Liga Dance"; 

$message = '<strong>' . $name . '</strong> оставил(-а) заявку, Вы пожете связаться по номеру <strong> ' . $phone . '</strong>';
if (!empty($email)) 
  $message .= '<br>Email: ' . $email;

$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: ligadancekrd.ru\r\n"; 
$headers .= "Reply-To: no-reply\r\n"; 

mail($to, $subject, $message, $headers); 
?>