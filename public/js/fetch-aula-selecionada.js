
async function selecionarAula(post_id) {

  let promise = await fetch(`/users/aula-selecionada?post_id=${post_id}`);

  if (!promise.ok) {
    swal('Error', 'Não foi possível encontrar esta aula', 'error');
    return;
  }
  return promise.json();
}


async function abrirModal(element) {

  let post_id = element.dataset.post_id;

  if (isNaN(post_id)) {
    swal('Error', 'Não foi possível encontrar esta aula', 'error');
    return;
  }

  let bodyModal = document.querySelector('#modalDetalhesAula .modal-body');
  let footerModal = document.querySelector('#modalDetalhesAula .modal-footer');
  let post = await selecionarAula(post_id);

  bodyModal.innerHTML =
    `    <div id="detalhes-container">
            <div class="msg-feed-header-avatar">
                <img src="/img/posts-img/${post.imagem}" alt="imagem">
            </div>
            <div id="container-texto-detalhes">
                <p class="titulo">${post.titulo}</p>
                <p class="subtitulo">#quero ensinar | ${post.perfil.ensino.descricao}</p>
                <p class="texto">${post.descricao}</p>
            </div> 
        </div>
    </div>
    <article class="msg-feed-article">
        <div id="container-descricao-botoes">
            <span><i class="fas fa-coins"></i> ${post.preco_aula} Moedas</span>
            <span><i class="far fa-star"> ${post.perfil.nota_professor}</i></span>
            <span><i class="far fa-clock"></i> ${post.duracao_aula} minutos</span>
          </div>
        </article>
        <p style="padding: 1vw;"><i class="far fa-clock"></i> ${post.perfil.nome} cursa ${post.perfil.curso.descricao} e já ensinou por ${post.perfil.horas_ensino} minutos na plataforma, esta aula teve ${post.quantidade_medalhas}
          medalhas de engajamento</p>
  `;

  footerModal.innerHTML = `
        <div id="container-botaoUnico">
          <button type="button" class="btn btn-3b-l" data-idmensagemusuario="${post.usuario_id}">Fale com o
            professor</button>
        </div>
        <div id="container-botaoDuplo">
          <button type="button" class="btn btn-3b-d" data-aula="${JSON.stringify(post)}">Comprar</button>
        </div>
  `;
  
  $('#modalDetalhesAula').modal('show');
}