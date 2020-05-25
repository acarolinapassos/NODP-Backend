let { Curso } = require('./../models');
module.exports = {
  listar: async (req, res, next) => {
    try {
      let cursos = await Curso.findAll();
      return cursos;
    } catch (error) {
      console.log(error);
      return;
    }
  }
};