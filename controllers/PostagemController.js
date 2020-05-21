const { Postagem, Comentario, Perfil} = require('./../models');


module.exports = {
  //-------------------------------------------------------------------------
  //Listar postagem
  //http://localhost:3000/teste/postagens
  listar: async (req, res, next) => {
    try {
      let postagens = await Postagem.findAll({
        include: [
          {
            model: Comentario,
            as: 'comentarios',
            required: false,
          },
          {
            model: Perfil,
            as: 'perfil',
            require:false
          }
        ]
        // limit:10
      });
      res.send(postagens);
    } catch (error) {
      console.log(error);
    }
  },
  
  //-------------------------------------------------------------------------
  salvar: async (req, res) => {
    try {
      let {
        usuario_id,
        categoria_id,
        titulo,
        descricao,
        imagem
      } = req.body;
      
      const salvar = await Postagem.create({
        usuario_id,
        categoria_id,
        titulo,
        descricao,
        imagem
      });
      res.send('Post enviado');
    } catch (error) {
      console.log(error);
    }
  },
  
  //-------------------------------------------------------------------------
  editar: async (req, res) => {
    try {
      let {
        
        id,
        categoria_id,
        titulo,
        descricao,
        imagem
        
      } = req.body;
      
      const editar = await Postagem.update({
        categoria_id,
        titulo,
        descricao,
        imagem
      }, { where: { id: id } }
      );
      res.send('Post editado');
    } catch (error) {
      console.log(error);
    }
  },
  
  //-------------------------------------------------------------------------
  excluir: async (req, res) => {
    try {
      let {
        id,
      } = req.body;
      
      const editar = await Postagem.destroy({ where: { id } }
        );
        res.send('Post excluído');
      } catch (error) {
        console.log(error);
        
      }
    },
    //-------------------------------------------------------------------------
    //Listar postagens 
    listarPostagens: async (req, res) =>{
      
      try {
        let postagens = await Postagem.sequelize.query(
          `
          SELECT * 
          FROM ${Postagem.tableName} postagem
          INNER JOIN ${Perfil.tableName} perfil ON perfil.usuario_id = postagem.usuario_id
          LEFT JOIN ${Comentario.tableName} comentario ON comentario.post_id = postagem.id
          LEFT JOIN ${Perfil.tableName} usuario ON usuario.id = comentario.usuario_id
          GROUP BY postagem.id
          
          `

        );

        res.send(postagens);

      } catch (error) {
        
      }

    }
    
  };
  
  
  