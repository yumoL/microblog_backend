const app = require('./app')
//const debug = require('debug')('demo:server')
const http = require('http')

// eslint-disable-next-line no-undef
const port = normalizePort(process.env.PORT || '3003')

const server = http.createServer(app.callback())

server.listen(port, () => {
  console.log(`server listen at ${port}`)
})
//server.on('error', onError)
//server.on('listening', onListening)

function normalizePort(val) {
  const port = parseInt(val, 10)
  if (isNaN(port)) {
    return val
  }
  if (port >= 0) {
    return port
  }
  return false
}