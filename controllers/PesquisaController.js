const { Perfil, Postagem, Mensagem } = require('./../models');

module.exports = {
  pesquisar: async (req, res) => {
    try {

      let usuariosPesquisado = await Perfil.sequelize.query(``);
      let postatensPesquisada = await Postagem.sequelize.query(``);
      

    } catch (error) {
      
    }
}
};