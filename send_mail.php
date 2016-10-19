<?php

$name = $_POST['name'];
$phone = $_POST["phone"]
$mail = $_POST["mail"]
$messageContact = $_POST["message"]

$sujet = 'Rendez-vous pour un coup de bite';
$destinataire = 'clemibanez@gmail.com';
$headers = "From: \"".$name."\"<".$mail.">\n";
$headers .= "Reply-To: ".$mail."\n";
$headers .= "Content-Type: text/plain; charset=\"iso-8859-1\"";
if(mail($destinataire,$sujet,$message,$headers))
{
        echo "L'email a bien été envoyé.";
}
else
{
        echo "Une erreur c'est produite lors de l'envois de l'email.";
}
?>