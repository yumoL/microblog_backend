/**
 * @description test blogHome api
 */

const { Blog } = require('../../../database/models')
const { registerAndLogin, createBlog } = require('../testHelper')

describe('home page', () => {
  let userId
  let token
  beforeEach(async () => {
    await Blog.destroy({ where: {} })
    const loggedInUser = await registerAndLogin()
    userId = loggedInUser.id
    token = loggedInUser.token
  })

  test('Can create a blog', async() => {
    const content = 'automated content' + Date.now()
    const urls = [
      '/test1.png',
      '/test2.png'
    ]
    const res = await createBlog({ token, userId })
    expect(res.body.errno).toBe(0)
    expect(res.body.data.content).toBe(content)
    expect(res.body.data.images[0]).toEqual({ url:urls[0] })
  })
})