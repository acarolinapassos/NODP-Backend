let interesse;
const INPUT_INTERESSE_E = document.getElementById('input-interesse-en');
const INPUT_INTERESSE_A = document.getElementById('input-interesse-ap');
const ADD_INTERESSE_AP = document.getElementById('adicionar_interesse_ap');
const ADD_INTERESSE_EN = document.getElementById('adicionar_interesse_en');



async function salvarInteresse() {
  let promise = await fetch('/users/interesse', {
    headers: { "Content-Type": "application/json" },
    method: 'POST',
    body: JSON.stringify({ descricao: interesse })
  });

  let result = await promise;
  return result;
}







INPUT_INTERESSE_E.addEventListener('change', function () {
  interesse = this.value;
});

INPUT_INTERESSE_A.addEventListener('change', function () {
  interesse = this.value;
});

ADD_INTERESSE_AP.addEventListener('click',async function () {
  let result = await salvarInteresse();
    if (!result.ok) {
      swal('Oops!', 'Não foi possível adicionar interesse', 'error');
    } else {
      
    }
});

ADD_INTERESSE_EN.addEventListener('click', salvarInteresse);