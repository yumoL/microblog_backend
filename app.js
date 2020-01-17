const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
//const redisStore = require('koa-redis')
const cors = require('@koa/cors')
const jwtKoa = require('koa-jwt')
const serve = require('koa-static')
// const mount = require('koa-mount')
// const static_pages = new Koa()

//const { REDIS_CONF } = require('./conf/config')
require('dotenv').config()

const index = require('./routes/index')
const userApiRouter = require('./routes/user')
const otherRouter = require('./routes/other')

const { JWT_SECRET_KEY }=require('./constants')

// error handler
onerror(app)

app.use(serve('build'))

// middlewares
app.use(cors())
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

// ui routes
app.use(otherRouter.routes(), otherRouter.allowedMethods())

//jwt config
app.use(jwtKoa({
  secret: process.env.JWT_SECRET_KEY || JWT_SECRET_KEY
}).unless({
  path: [/^\/api\/user\/login|^\/api\/user\/register|^\/api\/user\/isExist/]
}))

// api routes
app.use(index.routes(), index.allowedMethods())
app.use(userApiRouter.routes(), userApiRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app