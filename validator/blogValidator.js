/**
 * @description validate blog when create it
 */

const validate = require('./_validate')

/**
  * Validation rules
  */
const SCHEMA = {
  type: 'object',
  properties: {
    content:{
      type: 'string'
    },
    urls:{
      type: 'array'
    }
  }
}

/**
 * Validate user data
 * @param {object} data
 */
function blogValidate(data = {}) {
  return validate(SCHEMA, data)
}

module.exports = blogValidate