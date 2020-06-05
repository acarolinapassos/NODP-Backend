state = {
    usuario: ''
};

async function atualizar () {
    try {
        const promise = await fetch(`/users/listarMensagens?id=${state.usuario}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!promise.ok) {
            alert("Error");
            return;
       }
        let mensagem = document.querySelector('.texto-msg').value = '';
        return promise.json();
        

    } catch (err) {
        console.log(err);
    }
}

async function listarMensagens (element) {

    let id = element.dataset.idmensagemusuario;
    state.usuario = id;
    try {
        const promise = await fetch(`/users/listarMensagens?id=${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!promise.ok) {
            alert("Error");
            return;
       }
        return promise.json();
       
    } catch(error) {
        console.log(error);
    }

 }

 async function atualizarMensagens () {

    const respostas = await atualizar();

    let ul = document.querySelector(".informacoes-do-msg-mensagens-ul");
    let header = document.querySelector(".msg-feed-header");
    let lis = '';

    for (let resposta of respostas) {
        lis +=`
    <li class="msg">
         <h2 class="subtitulo">
             ${resposta.perfil_msg.nome}
         </h2>
         <cite class="texto">
             ${resposta.mensagem}
         </cite>
         <time class="horario">
             ${resposta.data_hora}
         </time>
    </li>`;
    }

    ul.innerHTML = lis;
    header.innerHTML = `
    <header class="msg-feed-header">
    <div class="msg-feed-header-avatar">
      <img src="/img/profile-img/${respostas[0].perfil_msg.avatar}" alt="">
    </div>
    <div>
      <h1 class="user-name subtitulo">${respostas[0].perfil_msg.nome}</h1>
    </div>
  </header>`;
}

async function enviar (element) {
    
    const respostas = await listarMensagens(element);

    let ul = document.querySelector(".informacoes-do-msg-mensagens-ul");
    let header = document.querySelector(".msg-feed-header");
    let lis = '';

    for (let resposta of respostas) {
        lis +=`
    <li class="msg">
         <h2 class="subtitulo">
             ${resposta.perfil_msg.nome}
         </h2>
         <cite class="texto">
             ${resposta.mensagem}
         </cite>
         <time class="horario">
             ${resposta.data_hora}
         </time>
    </li>`;
    }

    ul.innerHTML = lis;
    header.innerHTML = `
    <header class="msg-feed-header">
    <div class="msg-feed-header-avatar">
      <img src="/img/profile-img/${respostas[0].perfil_msg.avatar}" alt="">
    </div>
    <div>
      <h1 class="user-name subtitulo">${respostas[0].perfil_msg.nome}</h1>
    </div>
  </header>`;
}


async function enviarMensagem () {
    let mensagem = document.querySelector('.texto-msg').value;
    try {
        const promise = await fetch('/users/mensagens', {
            body: JSON.stringify({
                destinatario: state.usuario,
                mensagem: mensagem
            }),
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (!promise.ok) {
            alert("Error");
            return;
       }

        await atualizarMensagens();
       
    } catch(err){
        console.log(err);
    }

} 


async function requisitarMensagem (objeto) {
    let id = objeto;
    try {
        const promise = await fetch(`/users/listarMensagens?id=${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!promise.ok) {
            alert("Error");
            return;
       }
        return promise.json();
       
    } catch(error) {
        console.log(error);
    }
}

async function requisitarUsuario (objeto) {
    let id = objeto.dataset.idmensagemusuario;
    state.usuario = id;

    let data = await requisitarMensagem(id);

    console.log(JSON.stringify(data));
    let usuario = data.selecionarPerfil;
    let mensagens = data.resposta;

    if( mensagens.length === 0){
        let header = document.querySelector(".msg-feed-header");
        header.innerHTML = `
        <header class="msg-feed-header">
            <div class="msg-feed-header-avatar">
                <img src="/img/profile-img/${usuario.avatar}" alt="">
            </div>
            <div>
                <h1 class="user-name subtitulo">${usuario.nome}</h1>
            </div>
        </header>`;
        let ul = document.querySelector(".informacoes-do-msg-mensagens-ul");
        ul.innerHTML = `
        `;

    } else {
        let ul = document.querySelector(".informacoes-do-msg-mensagens-ul");
        let header = document.querySelector(".msg-feed-header");
        let lis = '';

        for (let mensagem of mensagens) {
        lis +=`
            <li class="msg">
                <h2 class="subtitulo">
                    ${usuario.nome}
                </h2>
                <cite class="texto">
                    ${mensagem.mensagem}
                </cite>
                <time class="horario">
                    ${mensagem.data_hora}
                </time>
            </li>`;
            }

            ul.innerHTML = lis;
            header.innerHTML = `
            <header class="msg-feed-header">
            <div class="msg-feed-header-avatar">
            <img src="/img/profile-img/${usuario.avatar}" alt="">
            </div>
            <div>
            <h1 class="user-name subtitulo">${usuario.nome}</h1>
            </div>
        </header>`;

    }

}