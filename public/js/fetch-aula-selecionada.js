let aula = {};

async function selecionarAula(post_id) {
try {
  let promise = await fetch(`/users/aula-selecionada?post_id=${post_id}`);

  if (!promise.ok) {
    swal('Error', 'Não foi possível encontrar esta aula', 'error');
    return;
  }
  return promise.json(); 
} catch (error) {
  console.log(error);
}
}


async function abrirModalAdquirirAula(element) {
try {
  let post_id = element.dataset.post_id;

  if (isNaN(post_id)) {
    swal('Error', 'Não foi possível encontrar esta aula', 'error');
    return;
  }

  let bodyModal = document.querySelector('#modalDetalhesAula .modal-body');
  let footerModal = document.querySelector('#modalDetalhesAula .modal-footer');
  let post = await selecionarAula(post_id);

  aula = {
    usuario_id: post.postagem.usuario_id,
    titulo_aula: post.postagem.titulo,
    descricao: post.postagem.descricao,
    qnt_moedas: post.postagem.preco_aula,
    duracao_minutos: post.postagem.duracao_aula
  };

  bodyModal.innerHTML =
    `    <div id="detalhes-container">
            <div id="container-texto-detalhes">
                <p class="titulo">${post.postagem.titulo}</p>

            <div class="msg-feed-header-avatar">
                <img src="/img/posts-img/${post.postagem.imagem}" alt="imagem">
            </div>

                <p class="subtitulo">#quero ensinar | ${post.postagem.perfil.ensino.descricao}</p>
                <p class="texto">${post.postagem.descricao}</p>
            </div> 
        </div>
    </div>
    <article class="msg-feed-article">
        <div id="container-descricao-botoes">
            <span><i class="fas fa-coins"></i> ${post.postagem.preco_aula} Moedas</span>
            <span><i class="far fa-star"> ${post.postagem.perfil.nota_professor}</i></span>
            <span><i class="far fa-clock"></i> ${post.postagem.duracao_aula} minutos</span>
          </div>
        </article>
        <p style="padding: 0 1.3vw;"><i class="far fa-clock"></i> ${post.postagem.perfil.nome} cursa ${post.postagem.perfil.curso.descricao} e já ensinou por ${post.postagem.perfil.horas_ensino} minutos na plataforma, esta aula teve ${post.postagem.quantidade_medalhas}
          medalhas de engajamento</p>
        <p style="padding: 0 1.3vw;">Publicado em: ${post.data_publicacao}</p>
  `;

  footerModal.innerHTML = `
        <div id="container-botaoUnico">
          <button type="button" class="btn btn-3b-l" data-idmensagemusuario="${post.postagem.usuario_id}">Fale com o
            professor</button>
        </div>
        <div id="container-botaoDuplo">
          <button type="button" class="btn btn-3b-d" id="btn-comprar" onclick="adquirirAula()">Comprar</button>
        </div>
  `;
  
  $('#modalDetalhesAula').modal('show');

} catch (error) {
  swal('Error', 'Não foi possível encontrar esta aula', 'error');
}
}


async function realizarTransacao() {
  try {
    const promise = await fetch("/users/adquirir-aula", {
      body: JSON.stringify(aula),
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      }
    });
    if (!promise.ok) {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
  }
}

async function adquirirAula() {
  let resultado = await realizarTransacao();
  $('#modalDetalhesAula').modal('hide');
  if(resultado){
    swal('Sucesso!', 'Combine com o professor o canal de ensino', 'success');
  } else {
    if (resultado.error) {
      swal('Erro!', resultado.error.message, 'error');
    } else {
      swal('Erro!', 'Não foi possível adquirir esta aula', 'error');
    }
  }
}