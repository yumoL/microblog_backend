/* eslint-disable no-undef */
/**
 * @description test User model
 */

const { User } = require('../../database/models')

test('Correct User attributes', () => {
  const userName = 'userTest'
  const password = 'pwdTest'
  const picture = '/test/png'
  const user = User.build({
    userName,
    password,
    picture
  })

  expect(user.userName).toBe(userName)
  expect(user.password).toBe(password)
  expect(user.picture).toBe(picture)
})