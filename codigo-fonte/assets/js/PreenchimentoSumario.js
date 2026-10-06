const params = new URLSearchParams(window.location.search);
const cpf = params.get("cpf");
const Profile_dadosPaciente = localStorage.getItem(cpf);
const paciente = JSON.parse(Profile_dadosPaciente);
const chave = params.get("chave");
const sumario = JSON.parse(localStorage.getItem(chave));

const params2 = new URLSearchParams(window.location.search);
const nomeMedicoLogado = params2.get("nome") || "Nome do Médico";
const crmMedicoLogado = params2.get("crm") || "10000001";

document.getElementById("sidebarNome").textContent = nomeMedicoLogado;
document.getElementById("sidebarCrm").textContent = crmMedicoLogado;

// Redirect para a pagina de busca usando a logo //
const RedirectDiv = document.getElementById("logo");

RedirectDiv.addEventListener("click", function () {
  window.location.href = `../busca/busca-paciente.html?nome=${nomeMedicoLogado}&crm=${crmMedicoLogado}`;
});




const dataAtual = new Date();
const nascimento = new Date(paciente.dataNascimento);
const idade = dataAtual.getFullYear() - nascimento.getFullYear();
const Admissão = paciente.DataHoraEntrada;
// Dados do cabeçalho Principal

document.getElementById("nomeCabecalhoPaciente").textContent = paciente.nome;
document.getElementById("idadeCabecalhoPaciente").textContent = idade;
document.getElementById("CPFCabecalhoPaciente").textContent = cpf;
document.getElementById("CNSCabecalhoPaciente").textContent =
  paciente.CodigoSus;
document.getElementById("DataNascCabecalhoPaciente").textContent = new Date(
  paciente.dataNascimento,
).toLocaleDateString("pt-BR");
//

//Dados Adicionais

document.getElementById("NomeSocialPreenchimento").textContent =
  paciente.nomeSocial;
document.getElementById("SexoPreenchimento").textContent = paciente.Sexo;
document.getElementById("RuaPreenchimento").textContent = paciente.RuaPaciente;
document.getElementById("NumeroCasaPreenchimento").textContent =
  paciente.NumeroCasaPaciente;
document.getElementById("ComplementoPreenchimento").textContent =
  paciente.ComplementoEndereco;
document.getElementById("BairroPreenchimento").textContent =
  paciente.BairroPaciente;
document.getElementById("CidadePreenchimento").textContent =
  paciente.CidadePaciente;
document.getElementById("EstadoPreenchimento").textContent =
  paciente.EstadoPaciente;
document.getElementById("Telefone1Preenchimento").textContent =
  paciente.TelPaciente1;
document.getElementById("Telefone2Preenchimento").textContent =
  paciente.TelPaciente2;
document.getElementById("EmailPreenchimento").textContent = paciente.email;
document.getElementById("TpSanguineoPreenchimento").textContent =
  paciente.TipoSanguineoPaciente;

//

//Dados Diagnosticos
document.getElementById("ProntuarioPreenchimento").textContent =
  sumario.Prontuario;
document.getElementById("UnidadeInternacaoPreenchimento").textContent =
  sumario.LocalInternacao;
document.getElementById("ProcedenciaPreenchimento").textContent =
  sumario.ProcedenciaInternacao;
document.getElementById("PreenchimentoMotivo").textContent =
  sumario.MotivoAtendimento;
document.getElementById("DataHoraAdmPreenchimento").textContent = new Date(
  sumario.DataHoraEntrada,
).toLocaleString("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});
document.getElementById("DiagnosticoAdmPreenchimento").textContent =
  sumario.DiagnosticoDeAdmissao;
document.getElementById("CIDAdmissaoPreenchimento").textContent =
  sumario.CIDAdmissao;
document.getElementById("PresencaPreenchimento").textContent =
  sumario.PresencaDoenca;
document.getElementById("ComorbidadesPreenchimento").textContent =
  sumario.ComorbidadesPaciente;
document.getElementById("CIDComorbidadePreenchimento").textContent =
  sumario.CIDComorbidades;
document.getElementById("DataHoraAltaPreenchimento").textContent = new Date(
  sumario.DataHoraSaida,
).toLocaleString("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});
document.getElementById("DiagnosticoFinalPreenchimento").textContent =
  sumario.DiagnosticoFinal;
document.getElementById("CIDdiagnosticoFinalPreenchimento").textContent =
  sumario.CIDDiagnosticoFinal;

// Sessão de Procedimentos //
document.getElementById("ProcedimentosPreenchimento").textContent =
  sumario.Procedimentos;

const btnAtualizarProcedimento = document.createElement("button");
btnAtualizarProcedimento.textContent = "Editar";
btnAtualizarProcedimento.addEventListener("click", function () {
  const ProcedimentoAtual = document.getElementById(
    "ProcedimentosPreenchimento",
  );
  const ValorAtualProcedimento = ProcedimentoAtual.textContent;
  ProcedimentoAtual.innerHTML = `<input type="text" id="inputProcedimento" value="${ValorAtualProcedimento}">
  <button id="btnSalvarProcedimento">Salvar</button>`;

  document
    .getElementById("btnSalvarProcedimento")
    .addEventListener("click", function () {
      const novoValor = document.getElementById("inputProcedimento").value;

      ProcedimentoAtual.textContent = novoValor;

      const sumario = JSON.parse(localStorage.getItem(chave));
      sumario.Procedimentos = novoValor;
      localStorage.setItem(chave, JSON.stringify(sumario));
    });
});
document
  .getElementById("ProcedimentosPreenchimentoFld")
  .appendChild(btnAtualizarProcedimento);
//

//Sessão de Alergias//

document.getElementById("AlergiaPreenchimento").textContent = sumario.Alergias;

const btnAtualizarAlergia = document.createElement("button");
btnAtualizarAlergia.textContent = "Editar";
btnAtualizarAlergia.addEventListener("click", function () {
  const AlergiasAtual = document.getElementById("AlergiaPreenchimento");
  const ValorAtualAlergias = AlergiasAtual.textContent;
  AlergiasAtual.innerHTML = `<input type="text" id="inputAlergias" value="${ValorAtualAlergias}">
  <button id="btnSalvarAlergia">Salvar</button>`;

  document
    .getElementById("btnSalvarAlergia")
    .addEventListener("click", function () {
      const novoValor = document.getElementById("inputAlergias").value;

      AlergiasAtual.textContent = novoValor;

      const sumario = JSON.parse(localStorage.getItem(chave));
      sumario.Alergias = novoValor;
      localStorage.setItem(chave, JSON.stringify(sumario));
    });
});
document.getElementById("AlergiasFld").appendChild(btnAtualizarAlergia);

//

//Sessão de Medicamentos//
document.getElementById("MedicamentosLista").textContent =
  sumario.MedicamentosPrescritos;
const btnAtualizarMedicamentos = document.createElement("button");
btnAtualizarMedicamentos.textContent = "Editar";
btnAtualizarMedicamentos.addEventListener("click", function () {
  const MedicamentosAtual = document.getElementById("MedicamentosLista");
  const ValorAtualMedicamentos = MedicamentosAtual.textContent;

  MedicamentosAtual.innerHTML = `<input type="text" id="inputMedicamentos" value="${ValorAtualMedicamentos}">
<button id="btnSalvarMedicamento"> Salvar </button>`;

  document
    .getElementById("btnSalvarMedicamento")
    .addEventListener("click", function () {
      const novoValorMedicamento =
        document.getElementById("inputMedicamentos").value;

      MedicamentosAtual.textContent = novoValorMedicamento;

      const sumario = JSON.parse(localStorage.getItem(chave));
      sumario.MedicamentosPrescritos = novoValorMedicamento;
      localStorage.setItem(chave, JSON.stringify(sumario));
    });
});

document
  .getElementById("MedicamentosFld")
  .appendChild(btnAtualizarMedicamentos);

//

// Sessão de finalização do sumário
/*
[...document.getElementsByName("StatusAtendimento")].forEach(function (radio) {
  radio.addEventListener("change", function () {
    const divMotivo = document.getElementById("MotivoSaidaPreenchimento");

    if (this.value === "Finalizado") {
      divMotivo.style.display = "block";
    } else {
      divMotivo.style.display = "none";
    }
  });
});
*/






const btnSalvar = document.createElement("button");
btnSalvar.textContent = "Salvar";
btnSalvar.addEventListener("click", function () {

  const sumario = JSON.parse(localStorage.getItem(chave));

  localStorage.setItem(chave, JSON.stringify(sumario));

  window.location.href = `/codigo-fonte/sumario/perfil-paciente.html?cpf=${cpf}`;
});

document
  .getElementById("statusAtendimentoPreenchimento")
  .appendChild(btnSalvar);

//

document.getElementById("saidaPreenchimento").textContent = sumario.motivoSaida;




// Sessão Medico responsável

document.getElementById("NomeMedicoPreenchimento").textContent =
  sumario.MedicoRegistroInicial;
document.getElementById("CRMPreenchimento").textContent = sumario.CrmMedico;
document.getElementById("EspecialidadePreenchimento").textContent =
  sumario.EspecialidadeMed;
document.getElementById("RQEPreenchimento").textContent = sumario.RQECodigo;

function handleSair() {
  if (confirm("Deseja encerrar a sessão?")) {
    window.location.href = "../index.html";
  }
}

function goToBusca() {
  window.location.href = `../sumario/perfil-paciente.html?cpf=${cpf}&nome=${nomeMedicoLogado}&crm=${crmMedicoLogado}`;
}

// Anotações//
 const htmlNotes =
  '<button class="Btn-Anotacoes" id="BtnAbrirAnotacoes" title="Anotações"> 📋 </button>' +

  '<div class="overlay-anotacoes" id="overlayAnotacoes">' +
    '<div class="modal-anotacoes">' +
      '<button class="BtnFecharAnotacoes" id="FecharAnotacoes"> &times; </button>' +
      '<div class="TituloAnotacoes">Anotações gerais:</div>' +
      

      '<div class="CampoAnotacoes">' +
        '<textarea class="PreenchimentoAnotacoes" id="PreenchimentoAnotacoes"></textarea>' +
      '</div>' +

      '<button class="BtnSalvarAnotacoes" id="SalvarAnotacoes">Salvar</button>' +
    '</div>' +
  '</div>';


  document.getElementById('cabecalhoPaciente').insertAdjacentHTML('beforeend', htmlNotes);

const BtnAbrirAnotacoes = document.getElementById("BtnAbrirAnotacoes");
const BtnFecharAnotacoes = document.getElementById("FecharAnotacoes");
const InputAnotacoes = document.getElementById("PreenchimentoAnotacoes");
const SalvarAnotacoes = document.getElementById("SalvarAnotacoes");
const overlayAnotacoes = document.getElementById("overlayAnotacoes");

BtnAbrirAnotacoes.addEventListener('click', function(){
overlayAnotacoes.classList.add('aberto')

});

BtnFecharAnotacoes.addEventListener('click',function(){
overlayAnotacoes.classList.remove('aberto')



});

InputAnotacoes.value = sumario.anotacoes || '';

SalvarAnotacoes.addEventListener('click', function(){
const sumario = JSON.parse(localStorage.getItem(chave));
sumario.anotacoes = InputAnotacoes.value;
localStorage.setItem(chave, JSON.stringify(sumario));
overlayAnotacoes.classList.remove('aberto')
});


// fim anotacoes //