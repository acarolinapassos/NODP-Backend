const CATEGORIA = document.querySelector('#modalMobile select[name=categoria_id]');
const DETALHES_ENSINAR = document.getElementById('detalhesEnsinar');
const URGENTE = document.getElementById('btn-Urgente');
const TITULO = document.querySelector('#modalMobile input[name=titulo');

const QTD_MOEDAS = document.getElementById('moeda');
const QTD_TEMPO = document.getElementById('time');
const BTN_MAIS_TEMPO = document.getElementById('btn-mais-tempo');
const BTN_MENOS_TEMPO = document.getElementById('btn-menos-tempo');
const BTN_MAIS_MOEDA = document.getElementById('btn-mais-moeda');
const BTN_MENOS_MOEDA = document.getElementById('btn-menos-moeda');

const QTD_MOEDAS_DESKTOP = document.getElementById('moeda-desktop'); 
const QTD_TEMPO_DESKTOP = document.getElementById('time-desktop'); 
const BTN_MAIS_TEMPO_DESKTOP = document.getElementById('btn-mais-tempo-desktop'); 
const BTN_MENOS_TEMPO_DESKTOP = document.getElementById('btn-menos-tempo-desktop'); 
const BTN_MAIS_MOEDA_DESKTOP = document.getElementById('btn-mais-moeda-desktop'); 
const BTN_MENOS_MOEDA_DESKTOP = document.getElementById('btn-menos-moeda-desktop'); 


const INPUT_URGENTE = document.getElementById('input-urgente-mobile');
const BTN_URGENTE_APRENDER = document.getElementById('btn-Urgente-aprender');
const INPUT_URGENTE_APRENDER = document.getElementById('input-urgente-aprender');



const AJUSTAR_LAYOUT_POSTAGEM_MOBILE = () => {
  let categoria = CATEGORIA.value;
  switch (categoria) {
    case '3':
    URGENTE.classList.remove('display-none');
    DETALHES_ENSINAR.classList.add('display-none');
    TITULO.classList.remove('titulo-total');
    break;
    case '2':
    URGENTE.classList.add('display-none');
    DETALHES_ENSINAR.classList.add('display-none');
    TITULO.classList.add('titulo-total');
    break;
    case '4':
    URGENTE.classList.add('display-none');
    DETALHES_ENSINAR.classList.remove('display-none');
    TITULO.classList.add('titulo-total');
    break;
    case '1':
    URGENTE.classList.add('display-none');
    DETALHES_ENSINAR.classList.add('display-none');
    TITULO.classList.add('titulo-total');
    break;
  }
};


//Ajustar tempo e moeda MOBILE------------------------------
const AUMENTAR_TEMPO = () => {
  var tempoAtual = parseInt(QTD_TEMPO.value);
  QTD_TEMPO.value = `${tempoAtual + 15} min`;
};

const DIMINUIR_TEMPO = () => {
  var tempoAtual = parseInt(QTD_TEMPO.value);
  (tempoAtual == 15) ? QTD_TEMPO.value = `${15} min` : QTD_TEMPO.value = `${tempoAtual - 15} min`;
};

const AUMENTAR_MOEDA = () => {
  var moedaAtual = parseInt(QTD_MOEDAS.value);
  (moedaAtual == 0) ? QTD_MOEDAS.value = `${1} moeda` : QTD_MOEDAS.value = `${moedaAtual + 1} moedas`;
};

const DIMINUIR_MOEDA = () => {
  var moedaAtual = parseInt(QTD_MOEDAS.value);
  if (moedaAtual == 2) {
    QTD_MOEDAS.value = `${1} moeda`;
  } else if (moedaAtual < 1) {
    QTD_MOEDAS.value = `${0} moeda`;
  } else {
    QTD_MOEDAS.value = `${moedaAtual - 1} moedas`;
  }
};
//Ajustar tempo e moeda MOBILE------------------------------

//Mobile
const FLEGAR_URGENTE = () => {
  URGENTE.classList.toggle('urgente-selecionado');
  (INPUT_URGENTE.value == 1) ? INPUT_URGENTE.value = 0 : INPUT_URGENTE.value = 1;
};

CATEGORIA.addEventListener('change', AJUSTAR_LAYOUT_POSTAGEM_MOBILE);

//Ajustar tempo e moeda MOBILE------------------------------
BTN_MAIS_TEMPO.addEventListener('click', AUMENTAR_TEMPO);
BTN_MENOS_TEMPO.addEventListener('click', DIMINUIR_TEMPO);
BTN_MAIS_MOEDA.addEventListener('click', AUMENTAR_MOEDA);
BTN_MENOS_MOEDA.addEventListener('click', DIMINUIR_MOEDA);
URGENTE.addEventListener('click', FLEGAR_URGENTE);
//Ajustar tempo e moeda MOBILE------------------------------

//-------------------------------------------------------------------------------------------
//Desktop - modal aprender
const FLEGAR_URGENTE_APRENDER = () => {
  BTN_URGENTE_APRENDER.classList.toggle('urgente-selecionado');
  (INPUT_URGENTE_APRENDER.value == 1) ? INPUT_URGENTE_APRENDER.value = 0 : INPUT_URGENTE_APRENDER.value = 1;
};

//lISTERNERS
BTN_URGENTE_APRENDER.addEventListener('click', FLEGAR_URGENTE_APRENDER);





//Ajustar tempo e moeda DESKTOP------------------------------
const AUMENTAR_TEMPO_DESKTOP = () => {
  var tempoAtual = parseInt(QTD_TEMPO_DESKTOP.value);
  QTD_TEMPO_DESKTOP.value = `${tempoAtual + 15} min`;
};

const DIMINUIR_TEMPO_DESKTOP = () => {
  var tempoAtual = parseInt(QTD_TEMPO_DESKTOP.value);
  (tempoAtual == 15) ? QTD_TEMPO_DESKTOP.value = `${15} min` : QTD_TEMPO_DESKTOP.value = `${tempoAtual - 15} min`;
};

const AUMENTAR_MOEDA_DESKTOP = () => {
  var moedaAtual = parseInt(QTD_MOEDAS_DESKTOP.value);
  (moedaAtual == 0) ? QTD_MOEDAS_DESKTOP.value = `${1} moeda` : QTD_MOEDAS_DESKTOP.value = `${moedaAtual + 1} moedas`;
};

const DIMINUIR_MOEDA_DESKTOP = () => {
  var moedaAtual = parseInt(QTD_MOEDAS_DESKTOP.value);
  if (moedaAtual == 2) {
    QTD_MOEDAS_DESKTOP.value = `${1} moeda`;
  } else if (moedaAtual < 1) {
    QTD_MOEDAS_DESKTOP.value = `${0} moeda`;
  } else {
    QTD_MOEDAS_DESKTOP.value = `${moedaAtual - 1} moedas`;
  }
};
//Ajustar tempo e moeda DESKTOP------------------------------

//Ajustar tempo e moeda DESKTOP------------------------------
BTN_MAIS_TEMPO_DESKTOP.addEventListener('click', AUMENTAR_TEMPO_DESKTOP);
BTN_MENOS_TEMPO_DESKTOP.addEventListener('click', DIMINUIR_TEMPO_DESKTOP);
BTN_MAIS_MOEDA_DESKTOP.addEventListener('click', AUMENTAR_MOEDA_DESKTOP);
BTN_MENOS_MOEDA_DESKTOP.addEventListener('click', DIMINUIR_MOEDA_DESKTOP);
//Ajustar tempo e moeda DESKTOP------------------------------


//Atualizar limite de caracteres no modal publicação
function atualizarLimitCaracteres(el, idElemento) {
  var labelLimit = document.getElementById(idElemento);
  var qtdCaracteresDigitados = parseInt(el.value.length);
  labelLimit.textContent = 250 - qtdCaracteresDigitados;
}