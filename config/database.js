/**
 * Arquivo: config/database.js
 * Descrição: Arquivo responsável pelas connectionStrings da aplicação com o MongoDb
 *  & CosmosDb
 * Data: 24/01/2019
 * Author: Glaucia Lemos
 */

module.exports = {
  local:
  {
    localUrl: 'mongodb://localhost/explorandoti',
  },

  /* cosmosdb: (o ideal é criar um outro arquivo para colocar as connectionstring e colocar
    no .gitignore para que não que não fique exposto a sua key da connection string)
    Ex.: https://docs.microsoft.com/pt-br/azure/cosmos-db/mongodb-migrate
  {
    name: 'node-todo-explorando-ti',
    url: '<incluir-a-connection-string-cosmosdb>',
    port: 10255,
  }, */
};
