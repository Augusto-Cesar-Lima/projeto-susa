//puxando o sumario pra ter acesso ao forms//
const Sumario = document.getElementById("DadosSumario");

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


Sumario.addEventListener("submit", function (event) {
  event.preventDefault();

  const CPF = document.getElementById("CpfPaciente").value;

  //Definição da chave primaria//

  const chavePrimariaCPF = CPF;

  const nomePaciente = document.getElementById("NomePaciente").value.trim();
  const nomePacSocial = document.getElementById("NomeSocialPaciente").value;
  const CNS = document.getElementById("CnsPaciente").value;
  const dataNasc = document.getElementById("DataNascimentoPaciente").value;
  const sexoPaciente = [...document.getElementsByName("SexoPaciente")].find(
    (r) => r.checked,
  )?.value;
  const emailPaciente = document.getElementById("emailPaciente").value;
  const telefonePaciente = document.getElementById("TelefonePaciente").value;
  const telefonePaciente2 = document.getElementById("TelefoneSecundario").value;

  const prontuario = document.getElementById("NumeroProntuario").value;
  const admissaoHoraData = document.getElementById("DataHoraAdmissao").value;
  const altaHoraData = document.getElementById("DataHoraAlta").value;
  const unidadeInter = document.getElementById("unidadeInternacao").value;
  const Procedencia = document.getElementById("procedencia").value;
  const caraterInternacao = [
    ...document.getElementsByName("CaraterInternacao"),
  ].find((r) => r.checked)?.value;
  const enderecoRua = document.getElementById("RuaPaciente").value;
  const enderecoNumero = document.getElementById("NumCasaPaciente").value;
  const enderecoComplemento = document.getElementById("CompEndereco").value;
  const enderecoBairro = document.getElementById("Bairro").value;
  const enderecoEstado = document.getElementById("Estado").value;
  const enderecoCidade = document.getElementById("Cidade").value;

  const nomeMedico = document.getElementById("NomeMedico").value;
  const crmCodigo = document.getElementById("CRMCodigo").value;
  const crmEstado = document.getElementById("CRMEstado").value;
  const espMedico = document.getElementById("EspecialidadeMedico").value;
  const codRQE = document.getElementById("RQECodigo").value;
  const motivoAtend = document.getElementById("MotivoAtendimento").value;
  const DiagAdmissao = document.getElementById("DiagnosticoAdmissao").value;
  const CIDAdmissao = document.getElementById("CIDadmissao").value;
  const IndPresenca = [...document.getElementsByName("IndicadorPresenca")].find(
    (r) => r.checked,
  )?.value;
  const Comorbidades = document.getElementById("Comorbidades").value;
  const ComorbidadeCID = document.getElementById("CIDComorbidade").value;
  const DiagnosticoFin = document.getElementById("DiagnosticoFinal").value;
  const CIDAlta = document.getElementById("CIDalta").value;
  const Procedimentos = document.getElementById("procedimentos").value;

  const Alergias = document.getElementById("AlergiasPaciente").value;
  const TipoSanguineo = document.getElementById("TipoSanguineoLista").value;
  const Medicamentos = document.getElementById("MedicamentosPrescritos").value;

  const MotivoSaida = document.getElementById("MotivoSaidaLista").value;

  //---------------------------------------------------------------------//

  // declarar as variaveis de uma entrada de sumário que será salva//
  const StoredadosPaciente = {
    nome: nomePaciente,
    nomeSocial: nomePacSocial,
    CodigoSus: CNS,
    dataNascimento: dataNasc,
    Sexo: sexoPaciente,
    email: emailPaciente,
    TelPaciente1: telefonePaciente,
    TelPaciente2: telefonePaciente2,
    RuaPaciente: enderecoRua,
    BairroPaciente: enderecoBairro,
    CidadePaciente: enderecoCidade,
    EstadoPaciente: enderecoEstado,
    NumeroCasaPaciente: enderecoNumero,
    ComplementoEndereco: enderecoComplemento,
    TipoSanguineoPaciente: TipoSanguineo,
  };

  const idAlta = Date.now();
  const StoredadosSumario = {
    Prontuario: prontuario,
    DataHoraEntrada: admissaoHoraData,
    DataHoraSaida: altaHoraData,
    LocalInternacao: unidadeInter,
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
  // divisão de chaves, uma unica para cada CPF e outra para identificar cada sumario de alta diferente de um mesmo paciente //
  localStorage.setItem(chavePrimariaCPF, JSON.stringify(StoredadosPaciente)); // Store dos dados dos pacientes//
  localStorage.setItem(
    `alta_${CPF}_${idAlta}`,
    JSON.stringify(StoredadosSumario),
  ); // store dos dados individuais de cada sumario//

  window.location.href = `perfil-paciente.html?cpf=${CPF}&nome=${nomeMedicoLogado}&crm=${crmMedicoLogado}`;
});

document.addEventListener("DOMContentLoaded", function () {
  const TipoSanguineo = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  TipoSanguineo.forEach(function (tipo) {
    const opcaoSangue = document.createElement("option");
    opcaoSangue.value = tipo;
    opcaoSangue.textContent = tipo;
    document.getElementById("TipoSanguineoLista").appendChild(opcaoSangue);
  });
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
  window.location.href = `../busca/busca-paciente.html?nome=${nomeMedicoLogado}&crm=${crmMedicoLogado}`;
}
