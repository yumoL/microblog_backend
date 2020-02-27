const server = require('./server')
const { User } = require('../../database/models')

const userName = `u_${Date.now()}`
const password = `p_${Date.now()}`
const testUser = {
  userName,
  password
}

async function register (user) {
  const response = await server
    .post('/api/user/register')
    .send(user)
  return response
}

async function login (user) {
  const response = await server
    .post('/api/user/login')
    .send(user)
  return response
}

/**
 * Used in test where login is required
 */
async function registerAndLogin(){
  await User.destroy({ where: {} })
  await register(testUser)
  const res = await login(testUser)
  // get user id and token
  id = res.body.data.id
  token = res.body.data.token
  const loggedInUser = { id, token }
  return loggedInUser
}


module.exports = {
  testUser,
  register,
  login,
  registerAndLogin
}