let { Perfil, Cidade, CanalEnsino, InstituicaoEnsino, Curso, Interesse } = require('./../models');
module.exports = {
  
  salvar: async (req, res, next) => {
    let perfil = {};
    let {
      cidade_id,
      nome, //ok
      curso_id, //ok
      bio, //ok
      celular, //ok
      quantidade_moedas, //ok
      instituicao_ensino_id, //OK
      turma, //ok
      metodo_ensino_id, //ok
      metodo_aprendizado_id, //ok
      // horas_ensino,
      // horas_estudo,
      // qtd_moedas,
      // qtd_medalhas
    } = req.body;
    
    perfil.cidade_id = parseInt(cidade_id);
    perfil.id = req.session.USER.id;
    perfil.nome = nome;
    perfil.curso_id = curso_id;
    perfil.bio = bio;
    perfil.celular = celular;
    perfil.quantidade_moedas = quantidade_moedas;
    perfil.instituicao_ensino_id = instituicao_ensino_id;
    perfil.turma = turma;
    perfil.metodo_ensino_id = metodo_ensino_id;
    perfil.metodo_aprendizado_id = metodo_aprendizado_id;

    for (let file of req.files) {
      if (file.fieldname.toUpperCase() == 'CAPA') {
        perfil.capa = file.filename;
      } else if (file.fieldname.toUpperCase() == 'AVATAR') {
        perfil.avatar = file.filename;
      }
    }

    let result = await Perfil.update(perfil, {
      where: {
        id: req.session.USER.id
      }
    });
    res.redirect('/users/perfil');
  },
  
  // --------------------------------------------------------------------------
  //Visualizar um perfil com todos os atributos : GET > query ?perfil=5
  //http://localhost:3000/teste/usuario?perfil=1
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
        
        let faculdades = await InstituicaoEnsino.findAll();
        let cursos = await Curso.findAll();
        let interesses = await Interesse.findAll();
      //res.send(perfil);
        res.render('perfil', { title: 'Perfil', perfil, faculdades, cursos, interesses });
      }
      catch (error) {
        console.log(error.message);
      }
    },
    
  };