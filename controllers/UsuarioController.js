const bcrypt = require('bcrypt');
const {
  Usuario
} = require('./../models');


module.exports = {

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
  //Salvar
  salvar: async (req, res) => {

    let {
      email,
      senha
    } = req.body

    let objeto = {
      email: email,
      senha: bcrypt.hashSync(senha, 10)
    }
    const criar = await Usuario.create(objeto).then(resposta => {
      res.send('Usuario cadastrado')
    }).catch(error => {
      res.send('Usuario nao cadastrado')
    })
  },

  //Editar(trocar a senha)

  editar: async (req, res) => {
    let {
      email,
      senha
    } = req.body;
    senha = bcrypt.hashSync(senha, 10)
    try {
      const editar = await Usuario.update(
        {senha:senha},
       {where:{email:email}}
      ) 
      res.send("Sua senha foi alterada com sucesso")
    } catch (error) {
      res.send("erro")
      console.log(error.message)
    }

  },
}










//Editar

//Exluir

//Buscar