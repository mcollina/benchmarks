'use strict'

const Koa = require('koa')

const app = new Koa()

app.use(async function (ctx) {
  await new Promise((resolve) => setTimeout(resolve, 10))
  ctx.body = { hello: 'world' }
})

app.listen(3000)
