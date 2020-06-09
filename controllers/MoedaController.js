const { Moeda, Postagem, Notificacao, Perfil } = require('../models');

module.exports = {
    salvar: async (req, res) => {
        const transacao = await Moeda.sequelize.transaction();
        try {

            //Verificar se o usuário logado possui moedas suficiente 
            let apoiador_id = req.session.USER.id;
            let { id, quantidade_apoios } = req.body;

            //Verificar se o usuario tem moedas suficiente 
            let perfil = await Perfil.findOne({
                where: {
                    id: apoiador_id
                },
                attributes: ['id', 'qtd_moedas'],
            }, { transaction: transacao});
        
            if (perfil.qtd_moedas < 1) {
                await transacao.rollback();
                res.status(401).json({ error: 'Moedas insuficientes' });
                return;
            }
            
            quantidade_apoios = parseInt(quantidade_apoios) + 1;
            const salvar = await Postagem.update({ quantidade_apoios }, {
                where: { id }
            }, { transaction: transacao });
            
            let post = await Postagem.findByPk(id);

            let transacaoDeMoedas = await Moeda.create(
                { remetente_id: apoiador_id, usuario_id: post.usuario_id, qtd_moedas: 1 },
                { transaction: transacao }
            );

            let notificar = await Notificacao.create({
                descricao: 'deu moeda',
                tipo_notificacao_id: '3',
                usuario_id: post.usuario_id,
                remetente_id: req.session.USER.id
            }, { transaction: transacao });
            
            //Atualiza o perfil com a quantidade de moedas
            /**
            CREATE TRIGGER ATUALIZAR_MOEDAS_PERFIL AFTER INSERT ON moedas FOR EACH ROW
            BEGIN
            UPDATE perfis SET perfis.qtd_moedas = perfis.qtd_moedas + NEW.qtd_moedas WHERE perfis.id = NEW.usuario_id;
            UPDATE perfis SET perfis.qtd_moedas = perfis.qtd_moedas - NEW.qtd_moedas WHERE perfis.id = NEW.remetente_id;
            END
            */
            await transacao.commit();
            res.status(200).json('Moeda Dada');
        } catch (error) {
            console.log(error);
            await transacao.rollback();
            res.status(401).json({ error: 'Moedas insuficientes' });
        }
    }
};