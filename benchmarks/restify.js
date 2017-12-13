'use strict'

const restify = require('restify')
const Penseur = require('penseur');

let db;

const server = restify.createServer()
server.get('/', function (req, res) {
  db.test.get(1).then((result) => res.send(result))
})

async function init() {
  db = new Penseur.Db('benchtest');
  await db.establish(['test']);
  await db.test.insert([{ id: 1, hello: 'world' }]);
  server.listen(3000)
}

init()
