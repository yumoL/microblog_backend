/**
 * @description validate data using json schema
 */

const Ajv = require('ajv')
const ajv = new Ajv()

/**
 * 
 * @param {Object} schema validation rules
 * @param {Object} data 
 */
function validate(schema, data = {}) {
  const valid = ajv.validate(schema, data)
  if (!valid) {
    return ajv.errors[0]
  }
}

module.exports = validate