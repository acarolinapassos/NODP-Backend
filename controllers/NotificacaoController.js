let {
    Usuario,
    Perfil,
    Mensagem,
    InstituicaoEnsino,
    Curso,
    Notificacao
} = require('./../models');
const moment = require('moment');

module.exports = {
    exibir: async (req, res) => {
         let id = req.session.USER.id;

        try {
            let notificacoes = await Notificacao.findAll({
                limit: 10,
            });
            
            let perfil = await Perfil.findAll(
                {
                limit: 2,
                attributes: ['id', 'nome', 'avatar'],
                }
            );
            let mensagens = await Mensagem.findAll(
                // {
                // limit: 10,
                // attributes: ['id', 'mensagem'],
                // }
            );
            let faculdades = await InstituicaoEnsino.findAll();
            let cursos = await Curso.findAll();
            res.render('notificacoes', {
                title: 'notificacoes',
                perfil,
                mensagens,
                faculdades,
                cursos,
                moment,
                notificacoes
            });
        } catch (error) {
            console.log(error);
            // res.redirect('/error');
        }
    },
    // listar notificacoes
    //http://localhost:3000/teste/notificacoes
    listar: async (req, res, next) => {
        try {
            let notificacoes = await Notificacao.findAll({
                limit: 10,
                //attributes: ['descricao', 'tipo_notificacao_id', 'usuario_id', 'remetente_id']

            });
            res.send(notificacoes);
            res.render('notificacoes');
            // res.render('notificacoes', {
            //     title: 'notificacoes',
            //     perfil,
            //     postagens,
            //     moment,
            //     notificacoes
            //   });
        } catch (error) {
            console.log(error);
            // res.redirect('/error');
        }
    },
    // salvar notificacoes
    //http://localhost:3000/teste/notificacoes
    salvar: async (req, res) => {
        try {
            let {
                descricao,
                tipo_notificacao_id,
                usuario_id,
                remetente_id,

            } = req.body;
            const salvar = await Notificacao.create({
                descricao,
                tipo_notificacao_id,
                usuario_id,
                remetente_id,

            });
            res.send('Notificação enviada');
            res.render('notificacoes', {
                title: 'notificacoes',
                perfil,
                postagens,
                moment,
                notificacoes
            });
        } catch (error) {
            console.log(error)
        }
    },
    // editar o atributo 'lida' das notificacoes
    //http://localhost:3000/teste/notificacoes
    editar: async (req, res) => {
        try {

            let {
                id,
                descricao,
                tipo_notificacao_id,
                usuario_id,
                remetente_id,
                lida
            } = req.body;

            const editar = await Notificacao.update({
                lida
            }, {
                where: {
                    id: id
                }
            });
            res.send('Notificação lida');
            res.render('notificacoes', {
                title: 'notificacoes',
                perfil,
                postagens,
                moment,
                notificacoes
            });
        } catch (error) {
            console.log(error);

        }
    },
    // excluir notificacoes
    //http://localhost:3000/teste/notificacoes
    excluir: async (req, res) => {
        try {

            let {
                id
            } = req.body;

            const excluir = await Notificacao.destroy({
                where: {
                    id
                }
            });
            res.send('Notificação excluída');
            res.render('notificacoes', {
                title: 'notificacoes',
                perfil,
                postagens,
                moment,
                notificacoes
            });
        } catch (error) {
            console.log(error);

        }
    }
}