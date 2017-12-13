'use strict'

const fastify = require('fastify')()
const Penseur = require('penseur');

const schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          },
          id: {
            type: 'number'
          }
        }
      }
    }
  }
}

let db;

fastify.get('/', schema, function (req, reply) {
  db.test.get(1).then((result) => reply.send(result))
})

async function init() {
  db = new Penseur.Db('benchtest');
  await db.establish(['test']);
  await db.test.insert([{ id: 1, hello: 'world' }]);
  fastify.listen(3000)
}

init()

