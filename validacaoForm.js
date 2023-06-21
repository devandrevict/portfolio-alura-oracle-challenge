function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
  
    if (nome === "") {
      alert("Por favor, preencha o campo nome.");
      return false;
    }
  
    if (nome.length > 50) {
      alert("O campo nome deve ter no máximo 50 caracteres.");
      return false;
    }
  
    if (email === "") {
      alert("Por favor, preencha o campo e-mail.");
      return false;
    }
  
    // Verifica o formato do e-mail utilizando uma expressão regular
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return false;
    }

    if (assunto === ""){
        alert("Por favor, preencha o campo assunto.");
        return false;
    }

    if (assunto.length > 50) {
        alert("O campo nome deve ter no máximo 50 caracteres.");
        return false;
      }

      if (mensagem === ""){
        alert("Por favor, preencha o campo mensagem.");
        return false;
    }

    if (mensagem.length > 300) {
        alert("O campo nome deve ter no máximo 300 caracteres.");
        return false;
      }
  
    return true;
  }

  document.addEventListener("DOMContentLoaded", function() {
    var nomeInput = document.getElementById("nome");
    var emailInput = document.getElementById("email");
    var assuntoInput = document.getElementById("assunto");
    var mensagemInput = document.getElementById("mensagem");
    var submitButton = document.getElementById("submitButton");
  
    function validarCampos() {
      if (nomeInput.value === true && emailInput.value === true && assuntoInput.value === true && mensagemInput.value === true && validarFormulario()) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    }
  
    nomeInput.addEventListener("input", validarCampos);
    emailInput.addEventListener("input", validarCampos);
    assuntoInput.addEventListener("input", validarCampos);
    mensagemInput.addEventListener("input", validarCampos);
  });