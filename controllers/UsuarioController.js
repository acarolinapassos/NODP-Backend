const bcrypt = require('bcrypt');
const {
  Usuario, Perfil, Cidade, CanalEnsino, InstituicaoEnsino
} = require('./../models');


module.exports = {
  //-------------------------------------------------------------------------
  //Listar
  listar: async (req, res) => {
    //let { user } = req.session;
    try {
      const users = await Usuario.findAll();
      res.send(users);
    } catch (error) {
      console.log(error);
    }
  },

  //-------------------------------------------------------------------------
  //Salvar
  salvar: async (req, res) => {

    let {
      email,
      senha
    } = req.body;

    let objeto = {
      email: email,
      senha: bcrypt.hashSync(senha, 10)
    }
    const criar = await Usuario.create(objeto).then(resposta => {
      res.send('Usuario cadastrado');
    }).catch(error => {
      res.send('Usuario nao cadastrado');
    })
  },

  //-------------------------------------------------------------------------
  //Editar(trocar a senha)
  editar: async (req, res) => {
    let {
      email,
      senha
    } = req.body;
    senha = bcrypt.hashSync(senha, 10);
    try {
      const editar = await Usuario.update(
        { senha: senha },
        { where: { email: email } }
      )
      res.send("Sua senha foi alterada com sucesso");
    } catch (error) {
      res.send("erro");
      console.log(error.message)
    }
  },
  //-------------------------------------------------------------------------

  excluir: async (req, res) => {
    let { id } = req.body;
    try {
      Usuario.update(
        { ativo: '0' },
        { where: { id } }
      )
      res.send("Usuário excluido com sucesso!");
    } catch (error) {
      res.send('Não foi possível excluir');
    }
  },

  // --------------------------------------------------------------------------

  perfil: async (req, res) => {
    let { perfil } = req.query;


    try {
      const usuario = await Perfil.findOne(
        
        {
          include: [
            {
              model: Usuario,
              as: 'user',
              required: true,
            },
            {
              model: Cidade,
              as: 'cidade',
              required: true
            },
            {
              model: CanalEnsino,
              as: 'canal',
              required: true
            },
            {
              model: InstituicaoEnsino,
              as: 'instituicao',
              required: true
            }
          ]
        },
      
        { where: { usuario_id: perfil } });

      res.send(usuario);
    }
    catch (error) {
      console.log(error);
      res.send('Erro ao procurar perfil');
      
    }
  }

};










//Editar

//Exluir

//Buscar