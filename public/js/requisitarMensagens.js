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
        document.querySelector('.texto-msg').value = '';
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
    
    let mensagens = await atualizar();
    mensagens = mensagens.resposta;
    
    let ul = document.querySelector(".informacoes-do-msg-mensagens-ul");
    let lis = '';

    for (var i = mensagens.length - 1; i >= 0; i--) {
        lis += `
            <li class="msg">
            <h2 class="subtitulo">
            ${mensagens[i].perfil_msg.nome}
            </h2>
            <cite class="texto">
            ${mensagens[i].mensagem}
            </cite>
            <time class="horario">
            ${moment(mensagens[i].data_hora).format('DD/MM hh:mm')}
            </time>
            </li>`;
    }

    ul.innerHTML = lis;
}


async function enviarMensagem () {
    try {
        let mensagem = document.getElementById('text-area-mensagem-modal').value;
        const promise = await fetch('/users/mensagens', {
            body: JSON.stringify({destinatario: state.usuario, mensagem: mensagem}),
            method: 'POST',
            headers: {"Content-Type": "application/json"}
        });
     
        let result = promise;
        return result;
        
    } catch(error){
        console.log(error);
    }
} 

async function tentarEnviarMsg() {
    try {
        let result = await enviarMensagem();
        if (!result.ok) {
            return false;
        } else {
            atualizarMensagens();
            document.getElementById('text-area-mensagem-modal').value = '';
        }   
    } catch (error) {
        console.log(error);
    }
}


async function requisitarMensagem (id) {
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
    let usuario = data.selecionarPerfil;
    let mensagens = data.resposta;
    
    if( mensagens.length == 0){
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
        
        for (var i = mensagens.length -1; i >= 0; i--) {
            lis +=`
            <li class="msg">
            <h2 class="subtitulo">
            ${mensagens[i].perfil_msg.nome}
            </h2>
            <cite class="texto">
            ${mensagens[i].mensagem}
            </cite>
            <time class="horario">
            ${moment(mensagens[i].data_hora).format('DD/MM hh:mm')}
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