'use Strict';

const express = require('express');
require('dotenv').config();
const server = express();

const HTTP = {
  port: process.env.HTTP_STATIC_PORT || 80,
  host: process.env.HTTP_STATIC_HOST || '127.0.0.1',
};

server.use(express.urlencoded({ extended: false }));
server.use(express.json());

//PARA HACER QUE .HTML NO APAREZCA EN LA BARRA DE NAVEGACÍON
// const sendFileOptions = {
//   root: `${__dirname}/staticFrontEnd/`,
// };
// server.get('/', (req, res) => {
//   res.sendFile('index.html', sendFileOptions);
// });

//servidor de ficheros estáticos

const sendFileOptions = {
  root: `${__dirname}/public/`,
};

server.get('/newpass', (req, res) => {
  res.sendFile('/', sendFileOptions);
});

server.get('/google-oauth', (req, res) => {
  res.sendFile('/', sendFileOptions);
});

server.use('/', express.static('./public'));

server.listen(HTTP.port, HTTP.host, () => {
  console.log(`Static File server running at http://${HTTP.host}:${HTTP.port}`);
});
