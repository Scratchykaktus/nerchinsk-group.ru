<?php
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $name = $_POST['name'];
    
    $emails = ['poleshuk.kas@yandex.ru', 'ooo.nmg@mail.ru',];
    
    $to = array_shift($emails);
    
    $subject = "=?utf-8?B?".base64_encode("Сообщение с сайта")."?=";
   // $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";
    $headers = "Bcc: ".implode(',', $emails)."\r\n";
    $message = ("Почта - $email, Номер телефона - $phone, Ф.И.О - $name");

    $success = mail($to, $subject, $message, $headers);
    echo $success;
?>