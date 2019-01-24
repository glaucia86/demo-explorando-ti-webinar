/**
 * Arquivo: server.js
 * Descrição: Arquivo responsável por toda a configuração do node.js da aplicação.
 * Data: 23/01/2019
 * Author: Glaucia Lemos
 */

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override'); // esse pacote iremos simular os HTTPs: DELETE & PUT

mongoose.connect('');

app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

app.listen(8000);
console.log('Aplicação executando na porta 8000');
