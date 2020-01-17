/**
 * @description crypt password
 */

const crypto = require('crypto')
const { CRYPRO_SECRET_KEY }=require('../constants')
require('dotenv').config()


/**
 * cryption using md5
 * @param {string} content password content
 */
function _md5(content) {
  const md5 = crypto.createHash('md5')
  return md5.update(content).digest('hex')
}

/**
 * cryption
 * @param {string} content
 */
function doCrypto(content) {
  const str = `password=${content}&key=${process.env.CRYPRO_SECRET_KEY || CRYPRO_SECRET_KEY}`
  return _md5(str)
}

module.exports = doCrypto