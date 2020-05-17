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
  }


  //Salvar
  
  //Editar
  
  //Exluir

  //Buscar
  
};