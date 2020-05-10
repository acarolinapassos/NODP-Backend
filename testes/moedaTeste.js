const { sequelize, Moeda } = require('../models');

//-----------------------------------------------------------------------
//Listar transações 
async function listar() {
  try {
    let lista = await Moeda.findAll();
    for (let moeda of lista) {
      console.log(`DE: User ${moeda.remetente_id} -> PARA: User ${moeda.usuario_id}`);
      console.log(`${moeda.qtd_moedas} Moedas`);
      console.log(`Em: ${moeda.data_hora}`);
      console.log('---------');
    }
  } catch (error) {
    
  }
  sequelize.close();
}

//-----------------------------------------------------------------------
//Realizar uma transação
async function realizarTransacao() {
  try {
    let qtd = Math.round(Math.random() * (10 - 1) + 1);
    let user1 = Math.round(Math.random() * (4 - 1) + 1);
    let user2 = Math.round(Math.random() * (4 - 1) + 1);
    (user1 == user2) ? user1 = user1 + 1 : '';
    let user = { usuario_id: user1, remetente_id: user2, qtd_moedas: qtd };
    let resultado = await Moeda.create(user); 
    console.log('---------');
    console.log('Foi realizado uma nova operação com sucesso!');
    console.log(resultado.dataValues);
  } catch (error) {
    console.log(error);
  } 
  sequelize.close();
}

//-----------------------------------------------------------------------
//Buscar uma transação pelo ID
async function buscar() {
  try {
    let id = Math.round(Math.random() * (12 - 1) + 1);
    let resultado = await Moeda.findByPk(id);
    console.log('---------');
    console.log(`Buscando pelo ID: ${id}`);
    console.log(resultado.dataValues);
  } catch (error) {
    console.log(error);
  }
}

//-----------------------------------------------------------------------
//TESTES A SEREM EXECUTADO 
realizarTransacao();
listar();
buscar();

