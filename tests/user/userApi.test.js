/* eslint-disable no-undef */
/**
 * @description test user api
 */

const server = require('../server')
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


describe('Register', () => {
  let res
  beforeEach(async () => {
    await User.destroy({ where: {} })
    res = await register(testUser)
  })

  test('New user can register', async () => {
    expect(res.body.errno).toBe(0)
  })

  test('Cannot register if userName is already existed', async () => {
    res = await register(testUser)
    expect(res.body.errno).not.toBe(0)
  })

  test('Can check if a userName is already existed', async () => {
    res = await server.post('/api/user/isExist').send({ userName })
    expect(res.body.errno).toBe(0)
  })

  test('Cannot register with invalid input', async () => {
    const invalidUser = {
      userName: 'a',
      password: 'b'
    }
    res = await register(invalidUser)
    expect(res.body.errno).not.toBe(0)
  })
})

describe('Login', () => {

  beforeEach(async () => {
    await User.destroy({ where: {} })
    await register(testUser)
  })

  test('can login with correct username and password', async () => {
    const res = await login(testUser)
    expect(res.body.errno).toBe(0)
  })

  test('Cannot login with wrong username or password', async () => {
    const res = await login({
      ...testUser,
      password: 'wrong pwd'
    })
    expect(res.body.errno).not.toBe(0)
  })
})

describe('Change user info', () => {
  let id
  let token
  beforeEach(async () => {
    await User.destroy({ where: {} })
    await register(testUser)
    const res = await login(testUser)
    // get user id and token
    id = res.body.data.id
    token = res.body.data.token
  })

  test('Can change basic info', async() => {
    const res = await server.patch(`/api/user/changeInfo/${id}`)
      .send({ newUserName: 'newUser', newPicture: '/newPic.png' })
      .set('Authorization', 'bearer '+token)
    expect(res.body.errno).toBe(0)
  })

  test('Can change password', async() => {
    const res = await server.patch(`/api/user/changePwd/${id}`)
      .send({ pwd: testUser.password, newPwd:'newPwd' })
      .set('Authorization', 'bearer '+token)
    expect(res.body.errno).toBe(0)
  })

  test('Cannot change password if old password is wrong', async()=>{
    const res = await server.patch(`/api/user/changePwd/${id}`)
      .send({ pwd: 'wrongPwd', newPwd:'newPwd' })
      .set('Authorization', 'bearer '+token)
    expect(res.body.errno).not.toBe(0)
  })
})

