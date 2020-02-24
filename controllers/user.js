/**
 * @description user controller
 */
const jwt = require('jsonwebtoken')
const { getUserInfo, createUser, updateUser } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { userNameNotExistInfo,
  registerUsernameExistInfo,
  registerFailInfo,
  loginFailInfo,
  changeInfoFailInfo,
  changePwdFailInfo
} = require('../model/ErrorInfo')
const doCrypto = require('../utils/crypt')
const { JWT_SECRET_KEY } = require('../constants')
require('dotenv').config()

/**
  * Check if a username/id is existed
  */
async function isExist({ id,userName }) {
  let userInfo
  if(id){
    userInfo = await getUserInfo({ id })
  } else {
    userInfo = await getUserInfo({ userName })
  }

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
  const userInfo = await getUserInfo({ userName })
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

/**
 * log in function
 * @param {*} needCrypto need to encrypt the password in plain text
 */
async function login(ctx, userName, password, needCrypto = true) {
  let userInfo = await getUserInfo({ userName, password: needCrypto ? doCrypto(password): password })
  if (!userInfo) {
    ctx.status = 401
    return new ErrorModel(loginFailInfo)
  }
  const token = jwt.sign(userInfo, process.env.JWT_SECRET_KEY || JWT_SECRET_KEY, { expiresIn: '1h' })
  userInfo = {
    token,
    ...userInfo
  }
  return new SuccessModel(userInfo)
}

/**
 * Change user basic info
 */
async function changeInfo(ctx, { newUserName, newPicture }, id){
  const updatedUser = await updateUser(
    { newUserName, newPicture },
    id
  )
  if(updatedUser!==null){
    const { userName, password } = updatedUser
    //do not need to encrypt password since we get this password directly from database
    return login(ctx, userName, password, false )
  }
  ctx.status = 400
  return new ErrorModel(changeInfoFailInfo)
}

/**
 * Changw password
 */
async function changePwd (ctx, { pwd, newPwd }, id){
  const updatedUser = await updateUser(
    { newPwd },
    id, pwd
  )
  if(updatedUser!==null){
    const { userName, password } = updatedUser
    return login(ctx, userName, password, false)
  }
  ctx.status = 400
  return new ErrorModel(changePwdFailInfo)
}

module.exports = {
  isExist,
  register,
  login,
  changeInfo,
  changePwd
}

