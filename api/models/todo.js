/**
 * Arquivo: models/todo.js
 * Descrição: Arquivo responsável pelo modelo da classe 'Todo'
 * Data: 24/01/2019
 * Author: Glaucia Lemos
 */

const mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
  texto: { type: String, default: '' },
});
