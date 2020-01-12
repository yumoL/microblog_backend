/**
 * @description user controller
 */
const jwt = require('jsonwebtoken')
const { getUserInfo, createUser } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { userNameNotExistInfo,
  registerUsernameExistInfo,
  registerFailInfo,
  loginFailInfo
} = require('../model/ErrorInfo')
const doCrypto = require('../utils/crypt')
require('dotenv').config()

/**
  * Check if a username is existed
  * @param {string} userName 
  */
async function isExist(userName) {
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    return new SuccessModel(userInfo)
  }
  return new ErrorModel(userNameNotExistInfo)
}

/**
 * register
 * @param {*} param0 
 */
async function register(ctx, userName, password) {
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    ctx.status = 400
    return new ErrorModel(registerUsernameExistInfo)
  }

  try {
    await createUser({
      userName,
      password: doCrypto(password)
    })
    return new SuccessModel()
  } catch (ex) {
    ctx.status = 400
    console.error(ex.message, ex.stack)
    return new ErrorModel(registerFailInfo)
  }
}

async function login(ctx, userName, password) {
  let userInfo = await getUserInfo(userName, doCrypto(password))
  if (!userInfo) {
    ctx.status = 401
    return new ErrorModel(loginFailInfo)
  }
  const token = jwt.sign(userInfo, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
  userInfo = {
    token,
    ...userInfo
  }
  return new SuccessModel(userInfo)
}

module.exports = {
  isExist,
  register,
  login
}

