function exibirValores() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var mensagem = document.getElementById("mensagem").value;
  
  var alerta = "Nome: " + nome + "\nE-mail: " + email + "\nMensagem: " + mensagem;
  alert(alerta);
}