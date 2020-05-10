const { sequelize, Moeda } = require('../models');


Moeda.findAll().then(
  result => {
    console.log(result.map(u => u.toJSON()));
    sequelize.close();
  }
);

let user = { usuario_id: 1, remetente_id: 2, qtd_moedas: 3 };
Moeda.create(user).then(
  result => {
    console.log(result);
  }
);


  
/*
async function listar() {
  try {
    let lista = await Moeda.findAll(
      {
        include: [{
          model: Moeda,
          as: 'perfis',
          include: 'usuarios'
        }]
      });
    for (let moeda of lista) {
      console.log('---------------------------------------');
      console.log(`Nome: ${moeda.perfis[0].nome}`);
      console.log(`Email: ${moeda.email}`);
      console.log(`Senha: ${moeda.senha}`);
      console.log('---------------------------------------');
    }
  } catch (error) {
    console.log(error);
  }
  sequelize.close();
}
*/
//listar();