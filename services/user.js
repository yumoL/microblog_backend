/**
 * @description user sservice
 */

const { User } = require('../database/models')
const { formatUser } = require('./_format')
const doCrypto = require('../utils/crypt')

/**
 * get user's information
 * @param {string} userName
 * @param {string} password
 */
async function getUserInfo({ id, userName, password }) {
  let whereOpt
  if(id){
    whereOpt = {
      id
    }
  } else{
    whereOpt = {
      userName
    }
  }

  if(password){
    Object.assign(whereOpt, { password })
  }
  const result = await User.findOne({
    attributes: ['id','userName','picture'],
    where: whereOpt
  })
  if(result == null){
    return result
  }
  return formatUser(result.dataValues)
}

/**
 * create a new user
 * @param {} param0
 */
async function createUser({ userName, password }){
  const result = await User.create({
    userName,
    password
  })
  return result.dataValues
}

async function updateUser(
  { newUserName, newPwd, newPicture },
  id, pwd //user id
){
  let updateData={}
  const whereOpt = { id }
  if(pwd){
    Object.assign(whereOpt, { password: doCrypto(pwd) })
  }
  if( newUserName ){
    updateData.userName = newUserName
  }
  if( newPwd ){
    updateData.password = doCrypto(newPwd)
  }
  if( newPicture ){
    updateData.picture = newPicture
  }

  const result = await User.update(updateData, {
    where: whereOpt
  })

  if(!result[0]>0){
    return null
  }
  const updatedUser = await User.findOne({
    attributes: ['userName','password','picture'],
    where: { id }
  })
  console.log('updated', updatedUser.dataValues)
  return updatedUser.dataValues
}


module.exports = {
  getUserInfo,
  createUser,
  updateUser
}