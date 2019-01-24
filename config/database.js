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

  cosmosdb:
  {
    name: 'node-todo-explorando-ti',
    url: 'mongodb://node-todo-explorando-ti:U13OfLJiRq4yOKQpHJxHQO1DBeg51b8TzqJ81kgZ1qALioE1F1Q9BtqpmEswh1rCiIYpxPN1DnDYIYU8lDU7Jg==@node-todo-explorando-ti.documents.azure.com:10255/explorandoti?ssl=true',
    port: 10255,
  },
};
