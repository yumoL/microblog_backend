/**
 * @description connect to redis (get, set)
 */
const { isProd } = require('../utils/env')

const redis = require('redis')

const REDIS_CONF = isProd ? {
  port: 9539,
  host: 'redis://h:pdf528cff93aac4e3a1b9c561d2bd6972b9538fe997b65e7b146e64cdcc9a6bd3@ec2-3-226-204-177.compute-1.amazonaws.com'
}:{
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
  console.log('redis_conf', REDIS_CONF)
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