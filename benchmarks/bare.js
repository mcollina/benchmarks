'use strict'

const Penseur = require('penseur');

let db;
const server = require('http').createServer(function (req, res) {
  db.test.get(1).then((result) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(result))
  });
})

async function init() {
  db = new Penseur.Db('benchtest');
  await db.establish(['test']);
  await db.test.insert([{ id: 1, hello: 'world' }]);
  server.listen(3000)
}

init()
