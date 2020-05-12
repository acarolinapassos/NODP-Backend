const {
    sequelize,
    Postagem
} = require('../models');

// escrever o post 
// upload da imagem
// escolher a categoria 
// publicar
// verifica o erro
// imprimir o erro


let postagem = {
    usuario_id : 4,
    categoria_id : Math.round(Math.random() * (4 - 1) + 1),
    titulo : `Estou aprendendo Javascript`,
    descricao : `Javascript é uma linguagem de programação...`,
    imagem : `img${Math.round(Math.random() * (50 - 1) + 1)}.png`
}
// criando a função publicar

async function publicar() {
    try {
        let resultado = await Postagem.create(postagem);
        console.log(`Sua postagem foi publicada com sucesso!!!`)
        console.log(resultado.dataValues);
    } catch (error) {
        console.log(error);
    }
    sequelize.close();
}

publicar();