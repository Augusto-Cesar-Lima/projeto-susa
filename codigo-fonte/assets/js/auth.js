window.onload = function () {
  const hash = window.location.hash;
  if (hash) {
    showForm(hash.substring(1));
  } else {
    showForm(FORMS.LOGIN);
  }

  const forms = document.querySelectorAll("form");
  forms.forEach(function (form) {
    form.reset();
  });
};

const FORMS = {
  LOGIN: "login",
  CADASTRO: "cadastro",
  RECUPERAR_SENHA: "recuperar-senha",
};

const formCadastro = document.getElementById("form-cadastro");

if (formCadastro) {
  formCadastro.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const crm = document.getElementById("crm").value.trim();
    const email = document.getElementById("email-cad").value.trim();
    const senha = document.getElementById("senha-cad").value;
    const confirmaSenha = document.getElementById("confirma-senha").value;

    const erro = document.getElementById("erro-cadastro");
    const sucesso = document.getElementById("sucesso-cadastro");

    erro.textContent = "";
    sucesso.textContent = "";

    // Validação 1: campos vazios
    if (!nome || !crm || !email || !senha || !confirmaSenha) {
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

    // Validação 4: email já cadastrado
    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];
    const emailJaExiste = usuariosSalvos.find(function (u) {
      return u.email === email;
    });

    if (emailJaExiste) {
      erro.textContent = "Este e-mail já está cadastrado.";
      return;
    }

    const novoUsuario = {
      nome: nome,
      crm: crm,
      email: email,
      senha: senha,
    };

    usuariosSalvos.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuariosSalvos));

    sucesso.textContent = "Cadastro realizado com sucesso!";
    formCadastro.reset();

    setTimeout(function () {
      showForm(FORMS.LOGIN);
    }, 2000);
  });
}

const formLogin = document.getElementById("form-login");

if (formLogin) {
  formLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const unidade = document.getElementById("unidade").value;

    const erro = document.getElementById("erro-login");
    erro.textContent = "";

    const dadosMedico = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Validação 0: campos vazios
    if (!email || !senha) {
      erro.textContent = "Preencha todos os campos.";
      return;
    }

    // Validação 1: selecionar unidade de saúde
    if (!unidade) {
      document.getElementById("erro-login").textContent =
        "Selecione uma Unidade de Saúde.";
      return;
    }

    // Validação 2: verificando se usuário existe
    const usuarioEncontrado = dadosMedico.find(function (a) {
      return a.email === email && a.senha === senha;
    });

    if (!usuarioEncontrado) {
      erro.textContent = "E-mail ou senha incorretos.";
      return;
    }

    if (usuarioEncontrado) {
      window.location.href = `busca/busca-paciente.html?nome=${usuarioEncontrado.nome}&crm=${usuarioEncontrado.crm}`;
    }
  });

  function logout() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "index.html";
  }
}

const formReset = document.getElementById("form-recuperar-senha");

if (formReset) {
  formReset.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const email = document.getElementById("email-esqueci").value.trim();
    const senha = document.getElementById("novasenha").value;
    const confirmaSenha = document.getElementById("repetir-novasenha").value;

    const erro = document.getElementById("erro-esqueci");
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
      showForm(FORMS.LOGIN);
    }, 2000);
  });
}

const btnCadastro = document.querySelector('[data-btn="cadastro"]');
const btnRecuperarSenha = document.querySelector(
  '[data-btn="recuperar-senha"]',
);

function handleCancelar() {
  showForm(FORMS.LOGIN);
}

if (btnCadastro) {
  btnCadastro.addEventListener("click", function () {
    showForm(FORMS.CADASTRO);
  });
}

if (btnRecuperarSenha) {
  btnRecuperarSenha.addEventListener("click", function () {
    showForm(FORMS.RECUPERAR_SENHA);
  });
}

function showForm(formId) {
  const forms = document.querySelectorAll("[data-form]");

  forms.forEach(function (form) {
    form.style.display = "none";
    if (form.dataset.form === formId) {
      form.style.display = "block";
    }
  });
}
