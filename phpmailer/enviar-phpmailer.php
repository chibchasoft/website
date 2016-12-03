<?php
$nombre = htmlspecialchars($_POST["nombre"]);
$emailcontacto = ($_POST["email"]);
$telefono = htmlspecialchars($_POST["telefono"]);
$mensaje = ($_POST["mensaje"]);
//Incluimos la clase de PHPMailer
require_once('class.phpmailer.php');

$correo = new PHPMailer(); //Creamos una instancia en lugar usar mail()

// Codificación UTF8. Obligado utilizarlo en aplicaciones en Español
$correo->CharSet = 'UTF-8';

//Usamos el SetFrom para decirle al script quien envia el correo
$correo->SetFrom($emailcontacto, $nombre);

//Usamos el AddReplyTo para decirle al script a quien tiene que responder el correo
$correo->AddReplyTo($emailcontacto, $nombre);

//Usamos el AddAddress para agregar un destinatario
$correo->AddAddress("correo_ejemplo@dominio.com.co", "Nombre destinatario");

//Ponemos el asunto del mensaje
$correo->Subject = "Contacto Web - " . $nombre;

/*
 * Si deseamos enviar un correo con formato HTML utilizaremos MsgHTML:
 * $correo->MsgHTML("<strong>Mi Mensaje en HTML</strong>");
 * Si deseamos enviarlo en texto plano, haremos lo siguiente:
 * $correo->IsHTML(false);
 * $correo->Body = "Mi mensaje en Texto Plano";
 */
$correo->MsgHTML("<strong>La persona: </strong>" . $nombre . "<br><br><strong>No. de teléfono: </strong>" . $telefono . "<br><br><strong>E-mail: </strong>" . $emailcontacto . "<br><br><strong>Dejo a través del formulario web, el siguiente mensaje: </strong><br><br>" . $mensaje);

//Si deseamos agregar un archivo adjunto utilizamos AddAttachment
//$correo->AddAttachment("images/phpmailer.gif");

//Enviamos el correo
if($correo->Send())
{
	echo'<script type="text/javascript">
			alert("Formulario enviado Correctamente. En menos de 24 horas nos comunicaremos con usted.");
			window.location="../index.html"
		 </script>';
}
else{
	echo'<script type="text/javascript">
			alert("NO ENVIADO, intentar de nuevo");
			window.location="../index.html"
		 </script>';
}
?>
