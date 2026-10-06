const params = new URLSearchParams(window.location.search);
const cpf = params.get("cpf");
const Profile_dadosPaciente = localStorage.getItem(cpf);
const paciente = JSON.parse(Profile_dadosPaciente);

const params2 = new URLSearchParams(window.location.search);
const nomeMedicoLogado = params2.get("nome") || "Nome do Médico";
const crmMedicoLogado = params2.get("crm") || "10000001";

document.getElementById("sidebarNome").textContent = nomeMedicoLogado;
document.getElementById("sidebarCrm").textContent = crmMedicoLogado;









const dataAtual = new Date();
const nascimento = new Date(paciente.dataNascimento);
const idade = dataAtual.getFullYear() - nascimento.getFullYear();
const Admissão = paciente.DataHoraEntrada;

const BtnNovoSumario = document.querySelector(".criacaoSumarioBtn");
BtnNovoSumario.addEventListener("click", function () {
  window.location.href = `novosumario.html?cpf=${cpf}&nome=${nomeMedicoLogado}&crm=${crmMedicoLogado}`;
});
/*
const NovoRegistroBtn = document.querySelector(".BtnNovoCadastro");
NovoRegistroBtn.addEventListener("click", function () {
  window.location.href = `../sumario/cadastrar-paciente.html?nome=${nomeMedicoLogado}&crm=${crmMedicoLogado}`;
});
*/
document.getElementById("nomeCabecalhoPaciente").textContent = paciente.nome;
document.getElementById("idadeCabecalhoPaciente").textContent = idade + " anos";
document.getElementById("CPFCabecalhoPaciente").textContent = cpf.replace(
  /(\d{3})(\d{3})(d{3})/,
  "$1.$2.$3-",
);
document.getElementById("CNSCabecalhoPaciente").textContent =
  paciente.CodigoSus;
document.getElementById("DataNascCabecalhoPaciente").textContent =
  nascimento.toLocaleDateString("pt-BR");

// ------------------------ //

const listagem = document.getElementById("ListaSumarios");

for (let i = 0; i < localStorage.length; i++) {
  const chave = localStorage.key(i);

  if (chave.startsWith(`alta_${cpf}_`)) {
    const sumario = JSON.parse(localStorage.getItem(chave));

    const card = document.createElement("div");
    card.className = "cardSumario";
    card.textContent =
      "Internação: " +
      new Date(sumario.DataHoraEntrada).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });

    const botao = document.createElement("button");
    botao.textContent = "Ver sumário";
    botao.className = "BtnVerSumario";
    botao.addEventListener("click", function () {
      window.location.href = `PaginaSumario.html?chave=${chave}&cpf=${cpf}&nome=${nomeMedicoLogado}&crm=${crmMedicoLogado}`;
    });

    card.appendChild(botao);
    listagem.appendChild(card);
  }
}



function handleSair() {
  if (confirm("Deseja encerrar a sessão?")) {
    window.location.href = "../index.html";
  }
}


// Redirect para a pagina de busca usando a logo //
const RedirectDiv = document.getElementById("logo");

RedirectDiv.addEventListener("click", function () {
  window.location.href = `../busca/busca-paciente.html?nome=${nomeMedicoLogado}&crm=${crmMedicoLogado}`;
});





function goToBusca() {

  window.location.href = `../busca/busca-paciente.html?nome=${nomeMedicoLogado}&crm=${crmMedicoLogado}`;

}

// ── UPLOAD DE PDF ── //

let pdfSelecionado = null;

function triggerUploadPDF() {
    document.getElementById("inputPDF").click();
}

function handlePDFUpload(event) {
    const arquivo = event.target.files[0];
    if (!arquivo) return;

    pdfSelecionado = arquivo;
    document.getElementById("inputData").value = "";
    document.getElementById("modalData").style.display = "block";

    // Máscara automática dd-mm-aa
    document.getElementById("inputData").addEventListener("input", function () {
        let v = this.value.replace(/\D/g, "").slice(0, 6);
        if (v.length >= 3 && v.length < 5) v = v.slice(0,2) + "-" + v.slice(2);
        else if (v.length >= 5) v = v.slice(0,2) + "-" + v.slice(2,4) + "-" + v.slice(4);
        this.value = v;
    });
}

function fecharModal() {
    document.getElementById("modalData").style.display = "none";
    document.getElementById("inputPDF").value = "";
    pdfSelecionado = null;
}

function confirmarUpload() {
    const dataDigitada = document.getElementById("inputData").value.trim();
    const regex = /^\d{2}-\d{2}-\d{2}$/;

    if (!regex.test(dataDigitada)) {
        alert("Insira uma data válida no formato dd-mm-aa.");
        return;
    }

    const urlPDF = URL.createObjectURL(pdfSelecionado);

    const card = document.createElement("div");
    card.className = "cardSumarioPDF";

    const label = document.createElement("div");
    label.className = "pdf-label";
    label.innerHTML = `<span class="pdf-icone">📄</span> Internação: ${dataDigitada} — ${pdfSelecionado.name}`;

    const botao = document.createElement("button");
    botao.textContent = "Ver PDF";
    botao.className = "BtnVerPDF";
    botao.addEventListener("click", function () {
        window.open(urlPDF, "_blank");
    });

    card.appendChild(label);
    card.appendChild(botao);
    document.getElementById("ListaSumarios").appendChild(card);

    fecharModal();
}