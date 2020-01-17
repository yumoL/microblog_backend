/**
 * @description format data
 */
require('dotenv').config()
const { DEFAULT_PICTURE } = require('../constants')

/**
 * defaulted user's picture
 * @param {Object} userObj user object
 */
function _formatUserPicture(userObj) {
  if (userObj.picture == null) {
    Object.picture = process.env.DEFAULT_PICTURE || DEFAULT_PICTURE
  }
  return userObj
}

/**
 * format user/user list
 * @param {*Array/Object} users userlist or single user
 */
function formatUser(users) {
  if (users == null) {
    return
  }
  if (users instanceof Array) {
    return users.map(_formatUserPicture)
  }
  return _formatUserPicture(users)
}

module.exports = {
  formatUser
}