/**
 * @description validate user data when register
 */

const validate = require('./_validate')

/**
  * Validation rules
  */
const SCHEMA = {
  type: 'object',
  properties: {
    userName: {
      type: 'string',
      maxLength: 255,
      minLength: 3
    },
    password: {
      type: 'string',
      maxLength: 255,
      minLength: 3
    }
  }
}

/**
 * Validate user data
 * @param {object} data
 */
function userValidate(data = {}) {
  return validate(SCHEMA, data)
}

module.exports = userValidate