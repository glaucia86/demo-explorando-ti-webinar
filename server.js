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

const port = process.env.PORT || 8000;
const database = require('./config/database');

mongoose.connect(database.local.localUrl, { useNewUrlParser: true });

app.use(express.static('./front-end'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride('X-HTTP-Method-Override'));

// Retornando as rotas:
require('./api/routes/routes.js')(app);

app.listen(port);
console.log('Aplicação executando na porta ', port);
