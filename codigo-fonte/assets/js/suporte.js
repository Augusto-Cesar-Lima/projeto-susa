(function () {
  'use strict';

  /* ── Constantes ── */
  const STORAGE_KEY = 'susa_suporte_chamados';

  /* ── Template do botão + modal ── */
  var html =
    '<button class="btn-suporte" id="btnAbrirSuporte" title="Suporte Técnico">' +
      '?' +
    '</button>' +

    '<div class="overlay-suporte" id="overlaySuporte">' +
      '<div class="modal-suporte">' +
        '<button class="btn-fechar-modal" id="btnFecharSuporte">&times;</button>' +
        '<div class="titulo-suporte">Suporte Técnico</div>' +
        '<div class="subtitulo-suporte">Preencha os dados para solicitar ajuda.</div>' +

        '<div class="campo">' +
          '<label for="suporteAssunto">Assunto</label>' +
          '<select id="suporteAssunto">' +
            '<option value="" selected disabled>Selecione o tipo de problema...</option>' +
            '<option value="acesso">Problema de acesso / login</option>' +
            '<option value="usabilidade">Dificuldade de usabilidade</option>' +
            '<option value="erro">Erro no sistema</option>' +
            '<option value="dados">Dados incorretos / inconsistentes</option>' +
            '<option value="outro">Outro</option>' +
          '</select>' +
        '</div>' +

        '<div class="campo">' +
          '<label for="suporteDescricao">Descrição</label>' +
          '<textarea id="suporteDescricao" placeholder="Descreva o problema encontrado..." maxlength="500"></textarea>' +
        '</div>' +

        '<p class="msg-suporte" id="msgSuporte"></p>' +

        '<div class="botoes-suporte">' +
          '<button type="button" class="btn-cancelar" id="btnCancelarSuporte">Cancelar</button>' +
          '<button type="button" class="btn-enviar" id="btnEnviarSuporte">Enviar</button>' +
        '</div>' +
      '</div>' +
    '</div>';

  /* ── Injeta HTML no body ── */
  document.body.insertAdjacentHTML('beforeend', html);

  /* ── Referências ── */
  var btnAbrir      = document.getElementById('btnAbrirSuporte');
  var btnFechar     = document.getElementById('btnFecharSuporte');
  var btnCancelar   = document.getElementById('btnCancelarSuporte');
  var btnEnviar     = document.getElementById('btnEnviarSuporte');
  var overlay       = document.getElementById('overlaySuporte');
  var selectAssunto = document.getElementById('suporteAssunto');
  var textDescricao = document.getElementById('suporteDescricao');
  var msg           = document.getElementById('msgSuporte');

  /* ── Abre / fecha modal ── */
  function abrirModal() {
    overlay.classList.add('aberto');
    limparFeedback();
    selectAssunto.selectedIndex = 0;
    textDescricao.value = '';
  }

  function fecharModal() {
    overlay.classList.remove('aberto');
  }

  btnAbrir.addEventListener('click', abrirModal);
  btnFechar.addEventListener('click', fecharModal);
  btnCancelar.addEventListener('click', fecharModal);

  /* Fecha clicando fora do card */
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) fecharModal();
  });

  /* ── Envio do chamado ── */
  btnEnviar.addEventListener('click', function () {
    var assunto   = selectAssunto.value;
    var descricao = textDescricao.value.trim();

    limparFeedback();

    if (!assunto) {
      exibirFeedback('Selecione um assunto.', 'erro');
      return;
    }

    if (descricao.length === 0) {
      exibirFeedback('Descreva o problema.', 'erro');
      return;
    }

    if (descricao.length < 10) {
      exibirFeedback('A descrição deve ter pelo menos 10 caracteres.', 'erro');
      return;
    }

    /* Cria o chamado */
    var chamado = {
      id:        Date.now(),
      assunto:   assunto,
      descricao: descricao,
      status:    'aberto',
      data:      new Date().toLocaleString('pt-BR')
    };

    salvarChamado(chamado);
    exibirFeedback('Chamado enviado com sucesso! Entraremos em contato em breve.', 'sucesso');

    /* Fecha após 2 segundos */
    setTimeout(fecharModal, 2000);
  });

  /* ── Feedback ── */
  function exibirFeedback(texto, tipo) {
    msg.textContent = texto;
    msg.className = 'msg-suporte ' + tipo;
  }

  function limparFeedback() {
    msg.textContent = '';
    msg.className = 'msg-suporte';
  }

  /* ── Persistência (localStorage) ── */
  function salvarChamado(chamado) {
    var lista = [];

    try {
      var dados = localStorage.getItem(STORAGE_KEY);
      if (dados) {
        lista = JSON.parse(dados);
        if (!Array.isArray(lista)) lista = [];
      }
    } catch (e) {
      lista = [];
    }

    lista.push(chamado);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
  }

  /* ── Tecla ESC fecha modal ── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('aberto')) {
      fecharModal();
    }
  });

})();
