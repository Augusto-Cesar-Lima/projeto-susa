  function handleBuscar() {
  
    const retorno = document.getElementById('retorno');

    if (modo === 'cpf') {
      if (!validarCpf(val)) {
        retorno.style.color = '#c0392b';
        retorno.textContent = 'CPF inválido. Verifique e tente novamente.';
        return;
      }
    } 

    retorno.style.color = '#888';
    retorno.textContent = 'Buscando…';

    const docDigitos = val.replace(/\D/g, '');
    const campo = 'cpf';
    const paciente = pacientes.find(p => p[campo] === docDigitos);

    if (paciente) {
      retorno.style.color = '#27ae60';
      retorno.textContent = `${paciente.nome}`;
    } else {
      retorno.style.color = '#c0392b';
      retorno.textContent = 'Paciente não encontrado.';
    }
  }



    /* ── validação ── */
  function validarCpf(cpf) {
    const d = cpf.replace(/\D/g, '');
    if (d.length !== 11 || /^(\d)\1+$/.test(d)) return false;
    let s = 0;
    for (let i = 0; i < 9; i++) s += +d[i] * (10 - i);
    let r = (s * 10) % 11; if (r === 10 || r === 11) r = 0;
    if (r !== +d[9]) return false;
    s = 0;
    for (let i = 0; i < 10; i++) s += +d[i] * (11 - i);
    r = (s * 10) % 11; if (r === 10 || r === 11) r = 0;
    return r === +d[10];
  }