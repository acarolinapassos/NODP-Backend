let { Cidade, CanalEnsino, InstituicaoEnsino, Curso } = require('./../models');

module.exports = {
  exibir: async (req, res) => {
    let id = req.session.USER.id;

    try {
      const perfil = await Perfil.findOne(
        {
          where: { id },
          include: [
            {
              model: Cidade,
              as: 'cidade',
              required: true
            },
            {
              model: CanalEnsino,
              as: 'ensino',
              required: true
            },
            {
              model: CanalEnsino,
              as: 'aprendizado',
              required: true
            },
            {
              model: InstituicaoEnsino,
              as: 'instituicao',
              required: true
            },
            {
              model: Curso,
              as: 'curso',
              require: true
            }
          ]
        });
      
      res.render('home', { title: 'Home', perfil });
    }
    catch (error) {
      console.log(error.message);
    }
  },
};