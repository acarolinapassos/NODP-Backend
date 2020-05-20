const {Postagem} = require('./../models');


module.exports = {
  //Listar postagem
  //http://localhost:3000/teste/postagens
  
  listar: async (req, res, next) => {
    try {
      let postagens = await Postagem.findAll({
        // limit:10
      });
      res.send(postagens);
    } catch (error) {
      console.log(error);
    }
  },

  salvar: async (req, res) => {
      try{
    let {
        usuario_id,
        categoria_id,
        titulo,
        descricao,
        imagem
    } = req.body
    
    const salvar = await Postagem.create({usuario_id,
        categoria_id,
        titulo,
        descricao,
        imagem});
      res.send('Post enviado');
} catch(error) {
      console.log(error);

      
    };
  },
  editar: async (req, res) => {
    try{
  let  {
    
    id,
    categoria_id,
    titulo,
    descricao,
    imagem
      
  } = req.body
  
  const editar = await Postagem.update({categoria_id,
    titulo,
    descricao,
    imagem}, {where:{id:id}}
  );
    res.send('Post editado');
} catch(error) {
    console.log(error);

    
  };
},

excluir: async (req, res) => {
    try{
  let  {
    id,
    } = req.body
  
  const editar = await Postagem.destroy({where:{id}}
  );
    res.send('Post excluído');
} catch(error) {
    console.log(error);

    
  };
},

  
}


