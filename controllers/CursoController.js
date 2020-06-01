let { Curso } = require('./../models');
const sequelize = require('sequelize');

module.exports = {
  listar: async (req, res, next) => {
    try {
      let cursos = await Curso.findAll({
        limit:50,
        order: sequelize.literal('id DESC'),
      });
      return cursos;
    } catch (error) {
      console.log(error);
      return;
    }
  }
};