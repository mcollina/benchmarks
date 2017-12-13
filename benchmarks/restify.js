'use strict'

const restify = require('restify')

const server = restify.createServer()
server.get('/', function (req, res) {
  setTimeout(() => res.send({ hello: 'world' }), 10)
})

server.listen(3000)
