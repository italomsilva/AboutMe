function sendEmail() {
  var nome = document.getElementById("inome").value;
  var email = document.getElementById("iemail").value;
  var msg = document.getElementById("imsg").value;

    var mailtoLink = 'mailto:italoroyale13@gmail.com?subject='+encodeURIComponent(`Portfólio Contact: ${nome}`)+'&body=';
    var layoutMsg = encodeURIComponent(`Olá meu nome é ${nome}\n\n\n ${msg}\n\n Espero Resposta pelo email: ${email}\n\n Atenciosamente, \n ${nome}`);
    var fullUrl = mailtoLink+layoutMsg
    window.location.href = fullUrl;
  return true;
}
