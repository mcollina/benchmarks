'use strict'

const Hapi = require('hapi')
const Penseur = require('penseur');

let db;

async function start () {
  const server = Hapi.server({ port: 3000, debug: false })

  server.route({
    method: 'GET',
    path: '/',
    config: {
      cache: false,
      response: {
        ranges: false
      },
      state: { parse: false }
    },
    handler: function (request, h) {
      return db.test.get(1)
    }
  })

  await server.start()
}

async function init() {
  db = new Penseur.Db('benchtest');
  await db.establish(['test']);
  await db.test.insert([{ id: 1, hello: 'world' }]);
  start()
}

init()
