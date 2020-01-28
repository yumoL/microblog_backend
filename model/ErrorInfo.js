/**
 * @description error information, includes errorno and message
 */

module.exports = {
  registerUsernameExistInfo: {
    errno: 10001,
    message: 'Username is already existed.'
  },
  registerFailInfo: {
    errno: 10002,
    message: 'Register failed, please try again'
  },

  userNameNotExistInfo: {
    errno: 10003,
    message: 'The username is not existed'
  },

  loginFailInfo: {
    errno: 10004,
    message: 'Login failed, username or password is wrong'
  },

  loginCheckFailInfo:{
    errno: 10005,
    message: 'You have not logged in'
  },

  jsonSchemaFailInfo: {
    errno: 10006,
    message: 'Data validation failed'
  },

  uploadFileSizeFailInfo: {
    errno: 10007,
    message: 'The file size is too large'
  },

  changeInfoFailInfo: {
    errno: 10008,
    message: 'Fail to change user info'
  },

  changePwdFailInfo: {
    errno: 10009,
    message: 'Fail to change password'
  },

  createBlogFail: {
    errno: 10010,
    message: 'Fail to create new blog'
  }


}