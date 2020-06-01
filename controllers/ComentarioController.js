const {Comentario} = require('./../models');
const sequelize = require('sequelize');

// listar comentarios
//http://localhost:3000/teste/comentarios
module.exports={
listar: async (req,res,next) =>{
    try {
        let comentarios = await Comentario.findAll({
            limit:5,
            order: sequelize.literal('id DESC'),
        });
        res.send(comentarios);
    } catch (error) {
            console.log(error);
          }
    },

    // salvar comentarios
    //http://localhost:3000/teste/comentarios
    salvar: async (req,res) =>{
        try {
            let {
                texto,
                post_id
            } = req.body;
            
        const salvar = await Comentario.create({
            texto,
            usuario_id:req.session.USER.id,
            post_id
        }); 
            res.redirect('/users/home');
        } catch (error) {
            console.log(error);
        }
    },
   // editar comentarios
   //http://localhost:3000/teste/comentarios
    editar: async (req,res) =>{
        try {
            let {
                id,
                texto,
                usuario_id,
                post_id
            } = req.body;
        const editar = await Comentario.update({
            texto,
           
        }, {where:{id:id}}); 
        res.send('Comentário editado')
        } catch (error) {
            console.log(error)
        }
    },
   // excluir comentarios
   //http://localhost:3000/teste/comentarios
    excluir: async (req,res) =>{
        try {
            
            let {
                id
            } = req.body;

            const excluir = await Comentario.destroy({ where: { id } }
                );
                res.send('Post excluído');
              } catch (error) {
                console.log(error);
                
              }
            },
    }



