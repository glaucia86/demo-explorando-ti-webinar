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

  /* cosmosdb: o ideal é criar um arquivo separado que contenha essa connectionString
  {
    name: 'node-todo-explorando-ti',
    url: '<incluir-a-connection-string-cosmosdb>',
    port: 10255,
  }, */
};
