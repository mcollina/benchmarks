'use strict'

const server = require('http').createServer(function (req, res) {
  setTimeout(() => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ hello: 'world' }))
  }, 10);
})

server.listen(3000)
