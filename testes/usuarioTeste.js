const { sequelize, Usuario } = require('../models');
const bk = require('bcrypt');
let idUltimaTransacao;

let resultadoTestes = {
  listar: 'Não testado',
  salvar: 'Não testado',
  buscar: 'Não testado',
  excluir: 'Não testado'
};

//-----------------------------------------------------------------------
//Listar transações 
async function listar() {
  try {
    let lista = await Usuario.findAll();
    resultadoTestes.listar = `Ok ${lista.length}`;
  } catch (error) {
    resultadoTestes.listar = 'Erro: ' + error.message;
    console.log(error);
  }
  buscar();
}

//-----------------------------------------------------------------------
//Realizar uma transação
async function salvar() {
  try {

      let aleatorio = Math.round(Math.random() * (1000 - 1) + 1);
      user = {
        email: `mail${aleatorio}@nodp.com`,
        senha: bk.hashSync(`nodpCoders${aleatorio}`, 10),
        admin: 0,
        ativo: 1,
    };
    
    let resultado = await Usuario.create(user);
    idUltimaTransacao = resultado.dataValues.id;
    resultadoTestes.salvar = `Ok id ${idUltimaTransacao}`;
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
    let id = idUltimaTransacao;
    let resultado = await Usuario.findByPk(id);
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
      let resultado = await Usuario.destroy({
        where: {
          id: idUltimaTransacao
        }
      });
      resultadoTestes.excluir = `Ok ${resultado}`;
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
salvar();


