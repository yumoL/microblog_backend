/**
 * @description connect to redis (get, set)
 */

const redis = require('redis')

const REDIS_CONF = {
  port: 6379,
  host: '127.0.0.1'
}

// create a client
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
redisClient.on('error', err => {
  console.log('redis error', err)
})

/**
  * redis setting
  * @param {string} key
  * @param {string} val
  * @param {number} timeout (s)
  */
function set(key, val, timeout = 60*60) {
  console.log('setting cache')
  if (typeof val === 'object') {
    val = JSON.stringify(val)
  }
  redisClient.set(key, val)
  redisClient.expire(key, timeout)
}

/**
  * get value according to key
  * @param {string} key
  */
function get(key) {
  const promise = new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err)
        return
      }
      if (val === null) {
        resolve(null)
        return
      }
      try {
        resolve(
          JSON.parse(val)
        )
      } catch (ex) {
        resolve(val)
      }
    })
  })
  return promise
}

module.exports = {
  set,
  get
}