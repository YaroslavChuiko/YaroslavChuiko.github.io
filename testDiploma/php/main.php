<?php

$recepient = "jarik.tchuicko@gmail.com";
$siteName = "HTML-шаблон";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$textarea = trim($_POST["textarea"]);
$message = "Ім'я: $name \nEmail: $email \nТелефон: $phone \nПовідомлення: $textarea";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>