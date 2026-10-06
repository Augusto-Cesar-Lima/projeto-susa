const dbLoadPaciente = {
  cpf: 94839348394,
  personal_info: {
    nome: "João Silva Santos",
    nomeSocial: "John",
    CodigoSus: "000039239293203",
    dataNascimento: "1999-05-22",
    Sexo: "Masculino",
    email: "teste@gmail.com",
    TelPaciente1: "31856688998",
    TelPaciente2: "31544896988",
    RuaPaciente: "Ipê",
    BairroPaciente: "Candido",
    CidadePaciente: "Belo Horizonte",
    EstadoPaciente: "Minas Gerais",
    NumeroCasaPaciente: "2003",
    ComplementoEndereco: "J",
  },
};

window.localStorage.setItem(
  dbLoadPaciente.cpf,
  JSON.stringify(dbLoadPaciente.personal_info),
);

/* ── dados de sessão ── */
const params = new URLSearchParams(window.location.search);
const nome = params.get("nome") || "Nome do Médico";
const crm = params.get("crm") || "10000001";

document.getElementById("sidebarNome").textContent = nome;
document.getElementById("sidebarCrm").textContent = crm;
/* ── fim dados de sessão ── */

const NovoRegistroBtn = document.querySelector(".BtnNovoCadastro");
NovoRegistroBtn.addEventListener("click", function () {
  window.location.href = `../sumario/cadastrar-paciente.html?nome=${nome}&crm=${crm}`;
});

const NovoCadastro = document.getElementById("BtnRegistroInicial");

NovoCadastro.appendChild(NovoRegistroBtn);

/* ── máscaras ── */
function mascaraCpf(v) {
  // remove tudo que não é dígito e limita a 11 dígitos
  const d = v.replace(/\D/g, "").slice(0, 11);
  // aplica pontos e traço
  if (d.length <= 3) return d;
  if (d.length <= 6) return d.slice(0, 3) + "." + d.slice(3);
  if (d.length <= 9)
    return d.slice(0, 3) + "." + d.slice(3, 6) + "." + d.slice(6);
  return (
    d.slice(0, 3) + "." + d.slice(3, 6) + "." + d.slice(6, 9) + "-" + d.slice(9)
  );
}

document.getElementById("campoBusca").addEventListener("input", function () {
  const pos = this.selectionStart;
  const tamanhoAnterior = this.value.length;
  this.value = mascaraCpf(this.value);
  // reposiciona cursor compensando os caracteres de máscara inseridos
  const diferenca = this.value.length - tamanhoAnterior;
  this.setSelectionRange(pos + diferenca, pos + diferenca);
});

/* ── busca ── */
function handleBuscar() {
  const CPFinput = document
    .getElementById("campoBusca")
    .value.replace(/\D/g, "");
  const CPFPesquisa = localStorage.getItem(CPFinput);

  if (CPFPesquisa) {
    window.location.href = `../sumario/perfil-paciente.html?cpf=${CPFinput}&nome=${nome}&crm=${crm}`;
  } else {
    document.getElementById("retorno").textContent = "Paciente não encontrado.";
  }
}

/* busca também ao pressionar Enter */
document.getElementById("campoBusca").addEventListener("keydown", function (e) {
  if (e.key === "Enter") handleBuscar();
});

/* ── encerrar sessão ── */
function handleSair() {
  if (confirm("Deseja encerrar a sessão?")) {
    /* redirecione para a tela de login */
    window.location.href = "../index.html"; /* Retorna para a pagina de login */
  }
}
