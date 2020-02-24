/**
 * @description format data
 */
require('dotenv').config()
const { timeFormatter } = require('../utils/datetime')

/**
 * defaulted user's picture
 * @param {Object} userObj user object
 */
function _formatUserPicture(userObj) {
  if (userObj.picture == null) {
    userObj.picture = '/defaulted_picture.jpg'
    //process.env.DEFAULT_PICTURE || DEFAULT_PICTURE
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

/**
 * format DB datetime
 * @param {} obj DB datetime
 */
function _formatDBTime(obj) {
  obj.createdAt = timeFormatter(obj.createdAt)
  obj.updatedAt = timeFormatter(obj.updatedAt)
  return obj
}

/**
 * format blog/blog list
 * @param {*Array/Object} blogs bloglist or single blog
 */
function formatBlog(blogs) {
  if(blogs == null) {
    return
  }
  if(blogs instanceof Array){
    return blogs.map(_formatDBTime)
  }
  return _formatDBTime(blogs)
}

module.exports = {
  formatUser,
  formatBlog
}