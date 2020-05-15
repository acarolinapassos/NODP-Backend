const { sequelize, Usuario } = require('../models');
const bcrypt = require('bcrypt');
let idUltimaTransacao;

let resultadoTestes = {
  listar: 'Não testado',
  realizarTransacao: 'Não testado',
  buscar: 'Não testado',
  excluir: 'Não testado'
};

//-----------------------------------------------------------------------
//Listar transações 
async function listar() {
  try {
    let lista = await Usuario.findAll();
    for (let usuarios of lista) {
      //console.log('---------');
      //console.log(`DE: User ${moeda.remetente_id} -> PARA: User ${moeda.usuario_id}`);
      //console.log(`${moeda.qtd_moedas} Moedas`);
      //console.log(`Em: ${moeda.data_hora}`);
    }
    resultadoTestes.listar = `Ok ${lista.length}`;
  } catch (error) {
    resultadoTestes.listar = 'Erro: ' + error.message;
    console.log(error);
  }
  buscar();
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
    //console.log('---------');
    //console.log('Foi realizado uma nova operação com sucesso!');
    idUltimaTransacao = resultado.dataValues.id;
    //console.log(resultado.dataValues);
    resultadoTestes.realizarTransacao = `Ok id ${idUltimaTransacao}`;
  } catch (error) {
    resultadoTestes.realizarTransacao = 'Erro: ' + error.message;
    console.log(error);
  }
  listar();
}

//-----------------------------------------------------------------------
//Buscar uma transação pelo ID
async function buscar() {
  try {
    let id = Math.round(Math.random() * (30 - 1) + 1);
    let resultado = await Moeda.findByPk(id);
    //console.log('---------');
    //console.log(`Buscando pelo ID: ${id}`);
    //console.log(resultado.dataValues);
    resultadoTestes.buscar = `Ok - id ${resultado.dataValues.id}`;
  } catch (error) {
    resultadoTestes.buscar = 'Erro ' + error.message;
    console.log(error);
  }
  excluir();
}

//-----------------------------------------------------------------------
//Excluir transação 
async function excluir() {
  if (!isNaN(idUltimaTransacao)) {
    try {
      //Identificar transação
      //Conectar com sequelize
      let resultado = await Moeda.sequelize.query(`DELETE FROM moedas WHERE id = ${idUltimaTransacao}`);
      //Executar função
      //Verificar se deu erro 
      resultadoTestes.excluir = `Ok ${resultado[0].serverStatus}`;
    } catch (error) {
      resultadoTestes.excluir = 'Erro ' + error.message;
      console.log(error);
    }
  } else {
    resultadoTestes.excluir = 'Não foi identificado a ultima operação';
  }
  exibirResultados();
}


//-----------------------------------------------------------------------
//Imprimir resultados dos testes
const exibirResultados = () => {

  console.log('_____________________________________');
  console.log('------RESULTADO DOS TESTES------');
  console.log('_____________________________________');
  for (let res in resultadoTestes) {
    console.log(res + ' : ' + resultadoTestes[res]);
  }
  console.log('-------------------------------------');
  sequelize.close();
};

//-----------------------------------------------------------------------
//Iniciar bateria de testes em ordem: SALVAR -> LISTAR -> BUSCAR -> EXCLUIR 
realizarTransacao();


