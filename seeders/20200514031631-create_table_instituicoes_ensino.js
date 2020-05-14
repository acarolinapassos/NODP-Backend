'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    return queryInterface.bulkInsert('People', [{
      name: 'John Doe',
      isBetaMember: false
    }], {});
    */
    return queryInterface.bulkInsert('instituicoes_ensino', [
      { descricao: 'Universidade de São Paulo USP', estado_id: 26, sigla: 'USP' },
      { descricao: 'Universidade Estadual de Campinas UNICAMP', estado_id: 26, sigla: 'UNICAMP' },
      { descricao: 'Universidade Federal do Rio Grande do Sul UFRGS', estado_id: 22, sigla: 'UFRGS' },
      { descricao: 'Universidade Federal do Rio de Janeiro', estado_id: 20, sigla: '' },
      { descricao: 'Universidade Estadual Paulista Júlio de Mesquita Filho', estado_id: 26, sigla: ' ' },
      { descricao: 'Universidade Federal de Minas Gerais UFMG', estado_id: 14, sigla: 'UFMG' },
      { descricao: 'Universidade Federal de Santa Catarina UFSC', estado_id: 25, sigla: 'UFSC' },
      { descricao: 'Universidade Federal do Paraná', estado_id: 17, sigla: ' ' },
      { descricao: 'Universidade de Brasília UNB', estado_id: 7, sigla: 'UNB' },
      { descricao: 'Universidade Federal Fluminense', estado_id: 20, sigla: ' ' },
      { descricao: 'Universidade Federal da Bahia', estado_id: 5, sigla: ' ' },
      { descricao: 'Universidade Federal de São Paulo UNIFESP', estado_id: 26, sigla: 'UNIFESP' },
      { descricao: 'Universidade Federal do Ceará', estado_id: 6, sigla: ' ' },
      { descricao: 'Universidade do Estado do Rio de Janeiro UERJ', estado_id: 20, sigla: 'UERJ' },
      { descricao: 'Universidade Federal de Pernambuco', estado_id: 18, sigla: ' ' },
      { descricao: 'Pontificia Universidade Católica do Rio de Janeiro PUC-RIO', estado_id: 20, sigla: 'PUC-RIO' },
      { descricao: 'Universidade Federal do Rio Grande do Norte', estado_id: 21, sigla: ' ' },
      { descricao: 'Universidade Federal do Pará UFPA', estado_id: 15, sigla: 'UFPA' },
      { descricao: 'Universidade Federal de Goiás UFG', estado_id: 10, sigla: 'UFG' },
      { descricao: 'Universidade Federal de São Carlos', estado_id: 17, sigla: '' },
      { descricao: 'Pontificia Universidade Católica do Rio Grande do Sul PUCRS', estado_id: 22, sigla: 'PUCRS' },
      { descricao: 'Universidade Federal de Santa Maria UFSM', estado_id: 26, sigla: 'UFSM' },
      { descricao: 'Universidade Estadual de Maringá', estado_id: 17, sigla: '' },
      { descricao: 'Universidade Federal da Paraíba UFPB', estado_id: 16, sigla: 'UFPB' },
      { descricao: 'Universidade Estadual de Londrina', estado_id: 17, sigla: '' },
      { descricao: 'Universidade Federal de Viçosa UFV', estado_id: 17, sigla: 'UFV' },
      { descricao: 'Universidade Federal de Uberlândia', estado_id: 14, sigla: '' },
      { descricao: 'Universidade Federal do Amazonas UFAM', estado_id: 14, sigla: 'UFAM' },
      { descricao: 'Fundação Getulio Vargas FGV', estado_id: 26, sigla: 'FGV' },
      { descricao: 'Universidade Estadual de Montes Claros UNIMONTES', estado_id: 26, sigla: 'UNIMONTES' },
      { descricao: 'Pontificia Universidade Católica do Paraná PUCPR', estado_id: 17, sigla: 'PUCPR' },
      { descricao: 'Universidade Federal de Juiz de Fora UFJF', estado_id: 14, sigla: 'UFJF' },
      { descricao: 'Universidade Federal do ABC UFABC', estado_id: 17, sigla: 'UFABC' },
      { descricao: 'Universidade Federal do Espírito Santo', estado_id: 8, sigla: '' },
      { descricao: 'Universidade Federal de Lavras UFLA', estado_id: 26, sigla: 'UFLA' },
      { descricao: 'Universidade Federal de Pelotas UFPEL', estado_id: 26, sigla: 'UFPEL' },
      { descricao: 'Universidade Federal de Campina Grande', estado_id: 26, sigla: '' },
      { descricao: 'Universidade Federal Rural de Pernambuco UFRPE', estado_id: 18, sigla: 'UFRPE' },
      { descricao: 'Universidade do Vale do Rio dos Sinos UNISINOS', estado_id: 26, sigla: 'UNISINOS' },
      { descricao: 'Universidade Federal de Mato Grosso do Sul', estado_id: 13, sigla: ' ' },
      { descricao: 'Universidade Federal de Ouro Preto UFOP', estado_id: 26, sigla: 'UFOP' },
      { descricao: 'Universidade Tecnológica Federal do Paraná UTFRP', estado_id: 17, sigla: 'UTFRP' },
      { descricao: 'Universidade do Estado de Santa Catarina UDESC', estado_id: 25, sigla: 'UDESC' },
      { descricao: 'Universidade Federal do Rio Grande FURG', estado_id: 22, sigla: 'FURG' },
      { descricao: 'Universidade de Santa Cruz do Sul UNISC', estado_id: 22, sigla: 'UNISC' },
      { descricao: 'Pontificia Universidade Católica do Minas Gerais PUC-MINAS', estado_id: 14, sigla: 'PUC-MINAS' },
      { descricao: 'Universidade Federal de Mato Grosso', estado_id: 12, sigla: ' ' },
      { descricao: 'Universidade Federal de São João del Rei UFSJ', estado_id: 26, sigla: 'UFSJ' },
      { descricao: 'Universidade Presbiteriana Mackenzie', estado_id: 26, sigla: ' ' },
      { descricao: 'Universidade Federal de Sergipe UFS', estado_id: 27, sigla: 'UFS' },
      { descricao: 'Universidade Federal do Maranhão', estado_id: 11, sigla: ' ' },
      { descricao: 'Universidade Estadual de Ponta Grossa UEPG', estado_id: 17, sigla: 'UEPG' },
      { descricao: 'Pontificia Universidade Católica de São Paulo PUC-SP', estado_id: 26, sigla: 'PUC-SP' },
      { descricao: 'Universidade Federal do Piauí UFPI', estado_id: 19, sigla: 'UFPI' },
      { descricao: 'Universidade Estácio de Sá', estado_id: 26, sigla: ' ' },
      { descricao: 'Universidade Estadual do Oeste do Paraná UNIOSTE', estado_id: 17, sigla: 'UNIOSTE' },
      { descricao: 'Universidade Católica de Brasilia', estado_id: 7, sigla: ' ' },
      { descricao: 'Universidade de Passo Fundo', estado_id: 17, sigla: ' ' },
      { descricao: 'Universidade Federal Rural do Rio de Janeiro UFRRJ', estado_id: 20, sigla: 'UFRRJ' },
      { descricao: 'Universidade Estadual de Feira de Santana UEFS', estado_id: 25, sigla: 'UEFS' },
      { descricao: 'Universidade Nove de Julho', estado_id: 17, sigla: ' ' },
      { descricao: 'Universidade de Caxias do Sul', estado_id: 17, sigla: ' ' },
      { descricao: 'Universidade Estadual da Paraíba UEPB', estado_id: 16, sigla: 'UEPB' },
      { descricao: 'Universidade Metodista de São Paulo', estado_id: 26, sigla: ' ' },
      { descricao: 'Universidade Estadual do Ceará', estado_id: 6, sigla: ' ' },
      { descricao: 'Instituto Tecnológico de Aeronáutica ITA', estado_id: 26, sigla: 'ITA' },
      { descricao: 'Universidade Luterana do Brasil ULBRA', estado_id: 10, sigla: 'ULBRA' },
      { descricao: 'Universidade do Estado da Bahia UNEB', estado_id: 5, sigla: 'UNEB' },
      { descricao: 'Universidade do Vale do Itajaí UNIVALI', estado_id: 25, sigla: 'UNIVALI' },
      { descricao: 'Faculdade de Medicina de São José do Rio Preto FAMERP', estado_id: 26, sigla: 'FAMERP' },
      { descricao: 'Pontificia Universidade Católica PUC-CAMPINAS', estado_id: 26, sigla: 'PUC-CAMPINAS' },
      { descricao: 'Universidade Federal Rural da Amazônia', estado_id: 4, sigla: ' ' },
      { descricao: 'Universidade Federal do Estado do Rio de Janeiro UNIRIO', estado_id: 20, sigla: 'UNIRIO' },
      { descricao: 'Universidade Federal de Itajubá UNIFEI', estado_id: 26, sigla: 'UNIFEI' },
      { descricao: 'Universidade Federal de Alagoas', estado_id: 2, sigla: ' ' },
      { descricao: 'Senac Serviço Nacional de Aprendizagem Comercial', estado_id: 26, sigla: ' ' },
      { descricao: 'Universidade do Sul de Santa Catarina UNISUL', estado_id: 25, sigla: 'UNISUL' },
      { descricao: 'Universidade de Fortaleza UNIFOR', estado_id: 1, sigla: 'UNIFOR' },
      { descricao: 'Universidade Estadual do Sudoeste da Bahia UESB', estado_id: 5, sigla: 'UESB' },
      { descricao: 'Universidade Regional de Blumenau FURB', estado_id: 25, sigla: 'FURB' },
      { descricao: 'Universidade Estadual de Santa Cruz UESC', estado_id: 14, sigla: 'UESC' },
      { descricao: 'Universidade de Pernambuco', estado_id: 18, sigla: ' ' },
      { descricao: 'Universidade do Extremo Sul Catarinense UNESC', estado_id: 25, sigla: 'UNESC' },
      { descricao: 'Universidade Federal do Pampa UNIPAMPA', estado_id: 26, sigla: 'UNIPAMPA' },
      { descricao: 'Universidade Federal dos Vales do Jequitinhonha e Mucuri UFVJM', estado_id: 20, sigla: 'UFVJM' },
      { descricao: 'Universidade Estadual do Norte Fluminense Darcy Ribeiro', estado_id: 20, sigla: ' ' },
      { descricao: 'Centro Federal de Educacão Tecnológica de Minas Gerais CEFET-MG', estado_id: 14, sigla: 'CEFET-MG' },
      { descricao: 'Universidade Estadual de Goiás UEG', estado_id: 10, sigla: 'UEG' },
      { descricao: 'Universidade Federal do Recôncavo da Bahia UFRB', estado_id: 5, sigla: 'UFRB' },
      { descricao: 'Universidade Estadual do Centro Oeste UNICENTRO', estado_id: 10, sigla: 'UNICENTRO' },
      { descricao: 'Universidade do Estado de Mato Grosso UNEMAT', estado_id: 12, sigla: 'UNEMAT' },
      { descricao: 'Universidade Federal de Alfenas UNIFAL-MG', estado_id: 14, sigla: 'UNIFAL-MG' },
      { descricao: 'Universidade Veiga de Almeida', estado_id: 26, sigla: ' ' },
      { descricao: 'Universidade Federal de Rondônia', estado_id: 26, sigla: ' ' },
      { descricao: 'Universidade Federal da Grande Dourados UFGD', estado_id: 1, sigla: 'UFGD' },
      { descricao: 'Universidade Paulista UNIP', estado_id: 26, sigla: 'UNIP' },
      { descricao: 'Universidade Federal do Tocantins UFT', estado_id: 24, sigla: 'UFT' },
      { descricao: 'Universidade Federal do Vale do São Francisco UNIVASF', estado_id: 17, sigla: 'UNIVASF' },
      { descricao: 'Universidade Federal do Acre UFAC', estado_id: 1, sigla: 'UFAC' },
      { descricao: 'Faculdade de Ciências Médicas da Santa Casa de São Paulo FCMSCSP', estado_id: 25, sigla: 'FCMSCSP' },
      
    ], {});
  },
  
  down: (queryInterface, Sequelize) => {
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    */
    return queryInterface.bulkDelete('instituicoes_ensino', null, {});
  }
};
