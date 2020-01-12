/**
 * @description user sservice
 */

const { User } = require('../database/models')
const { formatUser } = require('./_format')

/**
 * get user's information
 * @param {string} userName 
 * @param {string} password 
 */
async function getUserInfo(userName, password) {
  const whereOpt = {
    userName
  }
  if(password){
    Object.assign(whereOpt, {password})
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
async function createUser({userName, password}){
  const result = await User.create({
    userName,
    password
  })
  return result.dataValues
}

module.exports = {
  getUserInfo,
  createUser
}