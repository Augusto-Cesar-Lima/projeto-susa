const formReset = document.getElementById("form-recuperar-senha");

if (formReset) {
  formReset.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("novasenha").value;
    const confirmaSenha = document.getElementById("repetir-novasenha").value;

    const erro = document.getElementById("erro-login");
    const sucesso = document.getElementById("sucesso-reset");

    sucesso.textContent = "";
    erro.textContent = "";

    // Validação 0: campos vazios
    if (!email || !senha || !confirmaSenha) {
      erro.textContent = "Preencha todos os campos.";
      return;
    }

    // Validação 2: senha fraca
    if (senha.length < 6) {
      erro.textContent = "A senha deve ter no mínimo 6 caracteres.";
      return;
    }

    // Validação 3: senhas diferentes
    if (senha !== confirmaSenha) {
      erro.textContent = "As senhas não coincidem.";
      return;
    }

    // busca e armazenamentos dos dados do local storage//
    const dadosMedico = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Validação 4: email não registrado
    const emailValido = dadosMedico.find(function (e) {
      return email === e.email;
    });

    if (!emailValido) {
      erro.textContent = "Email não registrado na base de dados";
      return;
    }

    // validação de email e registro da nova senha

    if (emailValido) {
      emailValido.senha = senha;
      localStorage.setItem("usuarios", JSON.stringify(dadosMedico));
    }

    sucesso.textContent = "Reset realizado com sucesso!";
    formReset.reset();

    setTimeout(function () {
      window.location.href = `../login/index.html`;
    }, 2000);
  });
}
