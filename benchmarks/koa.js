'use strict'

const Koa = require('koa')
const Penseur = require('penseur');

const app = new Koa()

let db;
app.use(async function (ctx) {
  ctx.body = await db.test.get(1)
})

async function init() {
  db = new Penseur.Db('benchtest');
  await db.establish(['test']);
  await db.test.insert([{ id: 1, hello: 'world' }]);
  app.listen(3000)
}

init()
