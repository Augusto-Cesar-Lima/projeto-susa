const params = new URLSearchParams(window.location.search);
const cpf = params.get("cpf");
const Profile_dadosPaciente = localStorage.getItem(cpf);
const paciente = JSON.parse(Profile_dadosPaciente);

const params2 = new URLSearchParams(window.location.search);
const nomeMedicoLogado = params2.get("nome") || "Nome do Médico";
const crmMedicoLogado = params2.get("crm") || "10000001";

// Redirect para a pagina de busca usando a logo //
const RedirectDiv = document.getElementById("logo");

RedirectDiv.addEventListener("click", function () {
  window.location.href = `../busca/busca-paciente.html?nome=${nomeMedicoLogado}&crm=${crmMedicoLogado}`;
});


document.getElementById("sidebarNome").textContent = nomeMedicoLogado;
document.getElementById("sidebarCrm").textContent = crmMedicoLogado;

document.getElementById("tituloPaciente").textContent = paciente.nome;
document.getElementById("PreenchimentoNome").textContent = paciente.nome;
document.getElementById("PreenchimentoNomeSocial").textContent =
  paciente.nomeSocial;
document.getElementById("CPFPreenchimento").textContent = cpf;
document.getElementById("CNSPreenchimento").textContent = paciente.CodigoSus;
document.getElementById("DataNascimentoPreenchimento").textContent = new Date(
  paciente.dataNascimento,
).toLocaleString("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});
document.getElementById("SexoPreenchimento").textContent = paciente.Sexo;
document.getElementById("TpSanguineoPreenchimento").textContent =
  paciente.TipoSanguineoPaciente;

document.getElementById("Rua").textContent = paciente.RuaPaciente;
document.getElementById("Complemento").textContent =
  paciente.ComplementoEndereco;
document.getElementById("Bairro").textContent = paciente.BairroPaciente;
document.getElementById("Cidade").textContent = paciente.CidadePaciente;
document.getElementById("Estado").textContent = paciente.EstadoPaciente;
document.getElementById("NumeroCasa").textContent = paciente.NumeroCasaPaciente;

document.getElementById("Telefone1").textContent = paciente.TelPaciente1;
document.getElementById("Telefone2").textContent = paciente.TelPaciente2;
document.getElementById("email").textContent = paciente.email;

// ------------------------//

const BtnSubmit = document
  .getElementById("BtnNovoSumario")
  .addEventListener("click", function () {
    const Prontuario = document.getElementById("ProntuarioTxt").value;
    const DataHoraAdmissao = document.getElementById("DataHoraAdmissao").value;
    const DataHoraAlta = document.getElementById("DataHoraAlta").value;
    const UnidadeInternacao =
      document.getElementById("unidadeInternacao").value;
    const Procedencia = document.getElementById("procedencia").value;
    const caraterInternacao = [
      ...document.getElementsByName("CaraterInternacao"),
    ].find((r) => r.checked)?.value;
    const nomeMedico = document.getElementById("NomeMedico").value;
    const crmCodigo = document.getElementById("CRMCodigo").value;
    const crmEstado = document.getElementById("CRMEstado").value;
    const espMedico = document.getElementById("EspecialidadeMedico").value;
    const codRQE = document.getElementById("RQECodigo").value;
    const motivoAtend = document.getElementById("MotivoAtendimento").value;
    const DiagAdmissao = document.getElementById("DiagnosticoAdmissao").value;
    const CIDAdmissao = document.getElementById("CIDadmissao").value;
    const IndPresenca = [
      ...document.getElementsByName("IndicadorPresenca"),
    ].find((r) => r.checked)?.value;
    const Comorbidades = document.getElementById("Comorbidades").value;
    const ComorbidadeCID = document.getElementById("CIDComorbidade").value;
    const DiagnosticoFin = document.getElementById("DiagnosticoFinal").value;
    const CIDAlta = document.getElementById("CIDalta").value;
    const Procedimentos = document.getElementById("procedimentos").value;

    const Alergias = document.getElementById("AlergiasPaciente").value;

    const Medicamentos = document.getElementById(
      "MedicamentosPrescritos",
    ).value;

    const MotivoSaida = document.getElementById("MotivoSaidaLista").value;

    const idAlta = Date.now();
    const StoredadosSumario = {
      Prontuario: Prontuario,
      DataHoraEntrada: DataHoraAdmissao,
      DataHoraSaida: DataHoraAlta,
      LocalInternacao: UnidadeInternacao,
      ProcedenciaInternacao: Procedencia,
      CaraterInternacao: caraterInternacao,

      MedicoRegistroInicial: nomeMedico,
      CrmMedico: crmCodigo,
      EstadoCrm: crmEstado,
      EspecialidadeMed: espMedico,
      RQECodigo: codRQE,
      MotivoAtendimento: motivoAtend,
      DiagnosticoDeAdmissao: DiagAdmissao,
      CIDAdmissao: CIDAdmissao,
      PresencaDoenca: IndPresenca,
      ComorbidadesPaciente: Comorbidades,
      CIDComorbidades: ComorbidadeCID,
      DiagnosticoFinal: DiagnosticoFin,
      CIDDiagnosticoFinal: CIDAlta,
      Procedimentos: Procedimentos,
      Alergias: Alergias,

      MedicamentosPrescritos: Medicamentos,
      motivoSaida: MotivoSaida,
    };

    localStorage.setItem(
      `alta_${cpf}_${idAlta}`,
      JSON.stringify(StoredadosSumario),
    ); // store dos dados individuais de cada sumario//

    window.location.href = `perfilPaciente.html?cpf=${cpf}`;
  });

document.addEventListener("DOMContentLoaded", function () {
  const EstadoCRMedico = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  EstadoCRMedico.forEach(function (estado) {
    const opcaoEstado = document.createElement("option");
    opcaoEstado.value = estado;
    opcaoEstado.textContent = estado;
    document.getElementById("CRMEstado").appendChild(opcaoEstado);
  });

  const EspecialidadesLista = [
    "Acupuntura",
    "Alergia e Imunologia",
    "Anestesiologia",
    "Angiologia",
    "Cardiologia",
    "Cirurgia Cardiovascular",
    "Cirurgia da Mão",
    "Cirurgia de Cabeça e Pescoço",
    "Cirurgia do Aparelho Digestivo",
    "Cirurgia Geral",
    "Cirurgia Oncológica",
    "Cirurgia Pediátrica",
    "Cirurgia Plástica",
    "Cirurgia Torácica",
    "Cirurgia Vascular",
    "Clínica Médica",
    "Coloproctologia",
    "Dermatologia",
    "Endocrinologia e Metabologia",
    "Endoscopia",
    "Gastroenterologia",
    "Genética Médica",
    "Geriatria",
    "Ginecologia e Obstetrícia",
    "Hematologia e Hemoterapia",
    "Homeopatia",
    "Infectologia",
    "Mastologia",
    "Medicina de Emergência",
    "Medicina de Família e Comunidade",
    "Medicina do Trabalho",
    "Medicina de Tráfego",
    "Medicina Esportiva",
    "Medicina Física e Reabilitação",
    "Medicina Intensiva",
    "Medicina Legal e Perícia Médica",
    "Medicina Nuclear",
    "Medicina Preventiva e Social",
    "Nefrologia",
    "Neurocirurgia",
    "Neurologia",
    "Nutrologia",
    "Oftalmologia",
    "Oncologia Clínica",
    "Ortopedia e Traumatologia",
    "Otorrinolaringologia",
    "Patologia",
    "Patologia Clínica/Medicina Laboratorial",
    "Pediatria",
    "Pneumologia",
    "Psiquiatria",
    "Radiologia e Diagnóstico por Imagem",
    "Radioterapia",
    "Reumatologia",
    "Urologia",
  ];

  EspecialidadesLista.forEach(function (especialidade) {
    const opcaoEspecialidade = document.createElement("option");
    opcaoEspecialidade.value = especialidade;
    opcaoEspecialidade.textContent = especialidade;
    document
      .getElementById("EspecialidadeMedico")
      .appendChild(opcaoEspecialidade);
  });
});
function handleSair() {
  if (confirm("Deseja encerrar a sessão?")) {
    window.location.href = "../index.html";
  }
}

function goToBusca() {
  window.location.href = `../sumario/perfil-paciente.html?cpf=${cpf}&nome=${nomeMedicoLogado}&crm=${crmMedicoLogado}`;
}
