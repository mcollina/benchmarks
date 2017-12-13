'use strict'

const express = require('express')

const app = express()

app.disable('etag')
app.disable('x-powered-by')

app.get('/', function (req, res) {
  setTimeout(() => res.json({ hello: 'world' }), 10)
})

app.listen(3000)
