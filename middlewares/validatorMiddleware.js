/**
 * @description middleware to validate data using json schema
 */
const { ErrorModel } = require('../model/ResModel')
const {jsonSchemaFailInfo} = require('../model/ErrorInfo')

/**
 * generate validation middleware
 * @param {function} validateFunction 
 */
function genValidator(validateFunction) {
  async function validator(ctx, next){
    const data = ctx.request.body
    const error = validateFunction(data)
    if(error) {
      ctx.status = 400
      ctx.body = new ErrorModel(jsonSchemaFailInfo)
      return
    }
    await next()
  }
  return validator
}

module.exports = {
  genValidator
}