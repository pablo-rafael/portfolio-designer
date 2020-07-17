<?php
if(isset($_POST['email']) && !empty($_POST['email'])){
$nome = addcslashes($_POST['nome'])
$email = addcslashes($_POST['email'])
$assunto = addcslashes($_POST['assunto'])
$mensagem = addcslashes($_POST['mensagem'])
$to = ""; /*email do domínio*/
$subjet = "Cotato site";
$body = "Nome: ".$nome. "\r\n".
        "Email: ".$email. "\r\n".
        "Assunto: ".$assunto;
        "Mensagem: ".$mensagem;
$header = "From:"."\r\n". /*email do domínio*/
            ."Reply-To:".$email."\e\n".
            ."X=Mailer:PHP/".phpversion();
if(mail($to, $subjet, $body, $header)){
    echo("Email enviado com sucesso!")}
else{echo("Erro! O email não pode ser enviado!")}
}
?>