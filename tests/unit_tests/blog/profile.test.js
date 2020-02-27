/**
 * test profile api
 */
const server = require('../server')
const { Blog } = require('../../../database/models')
const { registerAndLogin, createBlog } = require('../testHelper')

describe('profile page', () => {
  let userId
  let token
  let content = 'automated content' + Date.now()
  let urls = ['/test1.png', '/test2.png']
  beforeEach(async () => {
    await Blog.destroy({ where: {} })
    const loggedInUser = await registerAndLogin()
    userId = loggedInUser.id
    token = loggedInUser.token
    await createBlog({ token, userId, content, urls })
  })

  test('Can get first page of blog list of the logged in user', async() => {
    const res = await server.get(`/api/blog/profile/${userId}/0`)
      .set('Authorization','bearer '+token)
    expect(res.body.errno).toBe(0)
    expect(res.body.data.blogList[0].content).toContain(content)
    expect(res.body.data.blogList[0].images[0]).toEqual({ url:urls[0] })
  })
})