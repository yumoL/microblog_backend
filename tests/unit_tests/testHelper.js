const server = require('./server')
const { User } = require('../../database/models')

const userName = `u_${Date.now()}`
const password = `p_${Date.now()}`
const testUser = {
  userName,
  password
}

const register = async (user) => {
  const response = await server
    .post('/api/user/register')
    .send(user)
  return response
}

const login = async (user) => {
  const response = await server
    .post('/api/user/login')
    .send(user)
  return response
}

/**
 * Used in test where login is required
 */
const registerAndLogin = async() => {
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