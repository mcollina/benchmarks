'use strict'

const Koa = require('koa')

const app = new Koa()

app.use(function (ctx) {
  return new Promise((resolve) => setTimeout(() => {
    ctx.body = { hello: 'world' }
    resolve()
  }, 10))
})

app.listen(3000)
