const bcrypt = require('bcrypt');
const { Usuario } = require('./../models');


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
  salvar:  async (req, res) => {

    let { email, senha } = req.body

    let objeto = {
      email: email,
      senha: bcrypt.hashSync(senha, 10)
    }
    const criar = await Usuario.create(objeto).then(resposta => {
      res.send('Usuario cadastrado')
    }).catch( error => {
      res.send('Usuario nao cadastrado')
    })

    
  
  }


  
  
  //Editar
  
  //Exluir

  //Buscar
  
};