'use strict'

const express = require('express')
const Penseur = require('penseur');

const app = express()

app.disable('etag')
app.disable('x-powered-by')

let db;

app.get('/', function (req, res) {
  db.test.get(1).then((result) => res.json(result))
})

async function init() {
  db = new Penseur.Db('benchtest');
  await db.establish(['test']);
  await db.test.insert([{ id: 1, hello: 'world' }]);
  app.listen(3000)
}

init()
