const FILTRO = document.getElementById('filtroPesquisa');
const INPUT_SEARCH = document.querySelector('input[type=search');
const LUPA = document.getElementById('form-pesquisar');


async function filtrar(element) {
  try {
    var query = element.dataset.item;
    if (element.classList.value != 'botao ativo') {
      location.href = `/users/pesquisas?search=pesquisar&descricao=${INPUT_SEARCH.value}&${query}`;
    }
  } catch (error) {
    console.log(error);
  }
}

function pesquisar() {
  location.href = `/users/pesquisas?search=pesquisar&descricao=${INPUT_SEARCH.value}&usuario=1&aprender=3&ensinar=4&ensinando=1&aprendendo=2`;
}


LUPA.addEventListener('submit', pesquisar);

