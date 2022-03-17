<?php
 header("Access-Control-Allow-Origin: *");
$errorMSG = "";


    $name = $_POST["nombre"];

    $email = $_POST["correo"];

    $subject = $_POST["empresa"];

    $message = $_POST["pass"];
$toEmail = "lguzman@intelnexo.com";
$mailHeaders = "From: " . $_POST["nombre"] . "<". $_POST["correo"] .">\r\n";
if(mail($toEmail, $subject, $message, $mailHeaders)) {
// print "<p class='success'>Contact Mail Sent.</p>";
echo "success";
} else {
// print "<p class='Error'>Problem in Sending Mail.</p>";
echo "error";
}



?>