/* ============================================================
   scripts.js – PataFeliz Petshop | Fase 2
   Autor: Gustavo
   Descrição: Funções JavaScript para interatividade e
              dinamismo do sistema web do petshop.
   ============================================================ */

/* ----------------------------------------------------------
   1. RELÓGIO EM TEMPO REAL
   Exibe data e hora atualizadas a cada segundo no banner
   superior do site.
   ---------------------------------------------------------- */
function atualizarRelogio() {
  const elementoRelogio = document.getElementById("relogio-banner");
  if (!elementoRelogio) return; /* Sai se o elemento não existir na página */

  const agora = new Date();

  /* Formata a data no padrão brasileiro: dd/mm/aaaa */
  const dia  = String(agora.getDate()).padStart(2, "0");
  const mes  = String(agora.getMonth() + 1).padStart(2, "0");
  const ano  = agora.getFullYear();

  /* Formata o horário: hh:mm:ss */
  const hora    = String(agora.getHours()).padStart(2, "0");
  const minuto  = String(agora.getMinutes()).padStart(2, "0");
  const segundo = String(agora.getSeconds()).padStart(2, "0");

  /* Monta o array de dias da semana em português */
  const diasSemana = [
    "Domingo", "Segunda-feira", "Terça-feira",
    "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
  ];
  const diaSemana = diasSemana[agora.getDay()];

  /* Atualiza o conteúdo do banner */
  elementoRelogio.textContent =
    `${diaSemana}, ${dia}/${mes}/${ano}  |  ${hora}:${minuto}:${segundo}`;
}

/* Inicia o relógio imediatamente e atualiza a cada 1 segundo */
atualizarRelogio();
setInterval(atualizarRelogio, 1000);


/* ----------------------------------------------------------
   2. VERIFICAR HORÁRIO DE FUNCIONAMENTO
   Exibe uma mensagem dinâmica informando se o petshop
   está aberto ou fechado no momento atual.
   ---------------------------------------------------------- */
function verificarFuncionamento() {
  const elementoStatus = document.getElementById("status-funcionamento");
  if (!elementoStatus) return;

  const agora   = new Date();
  const diaSem  = agora.getDay();   /* 0=Dom, 1=Seg ... 6=Sáb */
  const horaAtual = agora.getHours() * 60 + agora.getMinutes(); /* em minutos */

  let aberto = false;

  /* Segunda a Sexta: 08h00 às 19h00 */
  if (diaSem >= 1 && diaSem <= 5) {
    aberto = horaAtual >= 480 && horaAtual < 1140; /* 8*60=480, 19*60=1140 */
  }
  /* Sábado: 08h00 às 17h00 */
  else if (diaSem === 6) {
    aberto = horaAtual >= 480 && horaAtual < 1020; /* 17*60=1020 */
  }
  /* Domingo: 09h00 às 13h00 */
  else if (diaSem === 0) {
    aberto = horaAtual >= 540 && horaAtual < 780; /* 9*60=540, 13*60=780 */
  }

  if (aberto) {
    elementoStatus.innerHTML =
      '<span class="badge bg-success fs-6">🟢 Estamos Abertos agora!</span>';
  } else {
    elementoStatus.innerHTML =
      '<span class="badge bg-danger fs-6">🔴 Estamos Fechados no momento</span>';
  }
}

/* Executa ao carregar a página */
verificarFuncionamento();


/* ----------------------------------------------------------
   3. VALIDAÇÃO DO FORMULÁRIO DE CADASTRO
   Valida campos obrigatórios e formatos antes do envio.
   ---------------------------------------------------------- */
function validarFormulario(evento) {
  evento.preventDefault(); /* Impede o envio padrão do formulário */

  let valido = true;
  const erros = [];

  /* --- Valida CPF (formato: 000.000.000-00) --- */
  const campoCpf = document.getElementById("cpf");
  if (campoCpf) {
    const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!regexCpf.test(campoCpf.value)) {
      erros.push("CPF deve estar no formato 000.000.000-00.");
      campoCpf.classList.add("is-invalid");
      valido = false;
    } else {
      campoCpf.classList.remove("is-invalid");
      campoCpf.classList.add("is-valid");
    }
  }

  /* --- Valida telefone (formato: (00) 00000-0000) --- */
  const campoTel = document.getElementById("telefone");
  if (campoTel) {
    const regexTel = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    if (!regexTel.test(campoTel.value)) {
      erros.push("Telefone deve estar no formato (51) 99999-8888.");
      campoTel.classList.add("is-invalid");
      valido = false;
    } else {
      campoTel.classList.remove("is-invalid");
      campoTel.classList.add("is-valid");
    }
  }

  /* --- Valida se pelo menos um serviço foi selecionado --- */
  const servicos = document.querySelectorAll('input[name="servico"]:checked');
  const erroServico = document.getElementById("erro-servico");
  if (servicos.length === 0) {
    erros.push("Selecione ao menos um serviço.");
    if (erroServico) erroServico.style.display = "block";
    valido = false;
  } else {
    if (erroServico) erroServico.style.display = "none";
  }

  /* --- Valida método de agendamento --- */
  const metodo = document.querySelector('input[name="metodo"]:checked');
  const erroMetodo = document.getElementById("erro-metodo");
  if (!metodo) {
    erros.push("Selecione um método de agendamento.");
    if (erroMetodo) erroMetodo.style.display = "block";
    valido = false;
  } else {
    if (erroMetodo) erroMetodo.style.display = "none";
  }

  /* --- Resultado da validação --- */
  if (valido) {
    exibirMensagemSucesso();
  } else {
    /* Exibe todos os erros encontrados */
    const divErros = document.getElementById("erros-formulario");
    if (divErros) {
      divErros.innerHTML =
        '<ul>' + erros.map(e => `<li>${e}</li>`).join('') + '</ul>';
      divErros.style.display = "block";
    }
  }

  return false;
}

/* Exibe mensagem de sucesso após cadastro bem-feito */
function exibirMensagemSucesso() {
  const divErros  = document.getElementById("erros-formulario");
  const divSucesso = document.getElementById("sucesso-formulario");
  const formEl    = document.getElementById("form-cadastro");

  if (divErros)  divErros.style.display  = "none";
  if (formEl)    formEl.style.display    = "none";
  if (divSucesso) {
    divSucesso.style.display = "block";
    /* Rola a página até a mensagem de sucesso */
    divSucesso.scrollIntoView({ behavior: "smooth" });
  }
}


/* ----------------------------------------------------------
   4. MÁSCARA DE CPF
   Formata automaticamente o campo CPF enquanto o usuário
   digita: 000.000.000-00
   ---------------------------------------------------------- */
function mascaraCpf(campo) {
  let valor = campo.value.replace(/\D/g, ""); /* Remove tudo que não é número */
  valor = valor.substring(0, 11);             /* Limita a 11 dígitos */

  /* Aplica a formatação progressiva */
  if (valor.length > 9) {
    valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
  } else if (valor.length > 6) {
    valor = valor.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
  } else if (valor.length > 3) {
    valor = valor.replace(/(\d{3})(\d{1,3})/, "$1.$2");
  }

  campo.value = valor;
}


/* ----------------------------------------------------------
   5. MÁSCARA DE TELEFONE
   Formata automaticamente o campo telefone: (00) 00000-0000
   ---------------------------------------------------------- */
function mascaraTelefone(campo) {
  let valor = campo.value.replace(/\D/g, "");
  valor = valor.substring(0, 11);

  if (valor.length > 10) {
    valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (valor.length > 6) {
    valor = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  } else if (valor.length > 2) {
    valor = valor.replace(/(\d{2})(\d{0,5})/, "($1) $2");
  } else {
    valor = valor.replace(/(\d*)/, "($1");
  }

  campo.value = valor;
}


/* ----------------------------------------------------------
   6. MOSTRAR/OCULTAR CAMPO DE ENDEREÇO PARA TELE-BUSCA
   Exibe o campo de endereço de busca apenas quando o
   usuário seleciona "Tele-busca" como método de agendamento.
   ---------------------------------------------------------- */
function toggleEndereco() {
  const metodoSelecionado = document.querySelector('input[name="metodo"]:checked');
  const blocoEndereco     = document.getElementById("bloco-endereco-busca");

  if (!blocoEndereco) return;

  if (metodoSelecionado && metodoSelecionado.value === "telebusca") {
    blocoEndereco.style.display = "block";
    /* Torna o campo obrigatório quando tele-busca está selecionado */
    const campoEnd = document.getElementById("endereco-busca");
    if (campoEnd) campoEnd.required = true;
  } else {
    blocoEndereco.style.display = "none";
    const campoEnd = document.getElementById("endereco-busca");
    if (campoEnd) {
      campoEnd.required = false;
      campoEnd.value    = "";
    }
  }
}


/* ----------------------------------------------------------
   7. CONTADOR REGRESSIVO PARA PROMOÇÃO
   Exibe contagem regressiva até o fim do dia atual,
   criando senso de urgência em promoções.
   ---------------------------------------------------------- */
function atualizarContador() {
  const elementoContador = document.getElementById("contador-promocao");
  if (!elementoContador) return;

  const agora   = new Date();
  const fimDia  = new Date(
    agora.getFullYear(), agora.getMonth(), agora.getDate(),
    23, 59, 59 /* Meia-noite menos 1 segundo */
  );

  const diff = fimDia - agora; /* Diferença em milissegundos */

  if (diff <= 0) {
    elementoContador.textContent = "Promoção encerrada!";
    return;
  }

  /* Converte para horas, minutos e segundos */
  const horas    = Math.floor(diff / 3600000);
  const minutos  = Math.floor((diff % 3600000) / 60000);
  const segundos = Math.floor((diff % 60000) / 1000);

  elementoContador.textContent =
    `${String(horas).padStart(2,"0")}:` +
    `${String(minutos).padStart(2,"0")}:` +
    `${String(segundos).padStart(2,"0")}`;
}

/* Inicia o contador se o elemento existir */
atualizarContador();
setInterval(atualizarContador, 1000);


/* ----------------------------------------------------------
   9. AUDIODESCRIÇÃO DE IMAGENS – SÍNTESE DE VOZ
   Lê em voz alta a descrição da imagem ao clicar no botão
   "🔊 Ouvir descrição" abaixo de cada foto.
   Usa a API nativa SpeechSynthesis disponível em todos os
   navegadores modernos — sem necessidade de instalar nada.
   ---------------------------------------------------------- */
function lerDescricao(texto) {
  /* Verifica se o navegador suporta síntese de voz */
  if (!("speechSynthesis" in window)) {
    alert("Seu navegador não suporta a leitura em voz alta. Tente o Chrome ou Edge.");
    return;
  }

  /* Cancela qualquer fala em andamento antes de iniciar nova */
  window.speechSynthesis.cancel();

  /* Cria o objeto de fala com o texto recebido */
  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang  = "pt-BR";   /* Define o idioma como português do Brasil */
  fala.rate  = 0.95;      /* Velocidade levemente reduzida para melhor compreensão */
  fala.pitch = 1;         /* Tom natural */

  /* Dispara a leitura em voz alta */
  window.speechSynthesis.speak(fala);
}

/* ----------------------------------------------------------
   10. ACESSIBILIDADE – ALTO CONTRASTE
   Permite ao usuário ativar modo de alto contraste
   para melhor legibilidade.
   ---------------------------------------------------------- */
function toggleAltoContraste() {
  document.body.classList.toggle("alto-contraste");
  const ativo = document.body.classList.contains("alto-contraste");

  /* Persiste a preferência no localStorage */
  localStorage.setItem("altoContraste", ativo ? "sim" : "nao");

  const btn = document.getElementById("btn-contraste");
  if (btn) {
    btn.textContent = ativo ? "🌙 Contraste Normal" : "☀️ Alto Contraste";
    btn.setAttribute("aria-pressed", ativo ? "true" : "false");
  }
}

/* Restaura preferência de contraste ao carregar a página */
(function restaurarContraste() {
  if (localStorage.getItem("altoContraste") === "sim") {
    document.body.classList.add("alto-contraste");
    const btn = document.getElementById("btn-contraste");
    if (btn) {
      btn.textContent = "🌙 Contraste Normal";
      btn.setAttribute("aria-pressed", "true");
    }
  }
})();
