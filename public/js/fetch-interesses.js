let interesse;
let tipo = '';
const INPUT_INTERESSE_E = document.getElementById('input-interesse-en');
const INPUT_INTERESSE_A = document.getElementById('input-interesse-ap');
const ADD_INTERESSE_AP = document.getElementById('adicionar_interesse_ap');
const ADD_INTERESSE_EN = document.getElementById('adicionar_interesse_en');
let sessao_interesse_en = document.getElementById('sessao-interesses-en');
let sessao_interesse_ap = document.getElementById('sessao-interesses-ap');
const CLOSE_MODAL_EN = document.getElementById('close-modal-interesse-en');
const CLOSE_MODAL_AP = document.getElementById('close-modal-interesse-ap');

async function salvarInteresse() {
  let promise = await fetch('/users/interesse', {
    headers: { "Content-Type": "application/json" },
    method: 'POST',
    body: JSON.stringify({ descricao: interesse, tipo })
  });
  
  let result = await promise;
  return result;
}


INPUT_INTERESSE_E.addEventListener('change', function () {
  interesse = this.value;
  tipo = 'ensino';
});

INPUT_INTERESSE_A.addEventListener('change', function () {
  interesse = this.value;
  tipo = 'aprendizado';
});

async function salvarAprendizado() {
  let result = await salvarInteresse();
  if (!result.ok) {
    swal('Oops!', 'Não foi possível adicionar interesse', 'error');
  } else {
    sessao_interesse_ap.innerHTML += `<li class="item-list-interesse">${interesse}</li>`;
    INPUT_INTERESSE_A.value = '';
  }
}

async function salvarEnsino() {
  let result = await salvarInteresse();
  if (!result.ok) {
    swal('Oops!', 'Não foi possível adicionar interesse', 'error');
  } else {
    sessao_interesse_en.innerHTML += `<li class="item-list-interesse">${interesse}</li>`;
    INPUT_INTERESSE_E.value = '';
  }
}

function reloadPage() {
  location.reload();
}

CLOSE_MODAL_EN.addEventListener('click', reloadPage);
CLOSE_MODAL_AP.addEventListener('click', reloadPage);

ADD_INTERESSE_AP.addEventListener('click', salvarAprendizado);
ADD_INTERESSE_EN.addEventListener('click', salvarEnsino);
