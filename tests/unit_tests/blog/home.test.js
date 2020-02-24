/**
 * @description test blogHome api
 */

const server = require('../server')
const { Blog } = require('../../../database/models')
const { registerAndLogin } = require('../testHelper')

describe('blog', () => {
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
    const res = await server.post(`/api/blog/create/${userId}`)
      .send ({ content,urls })
      .set('Authorization', 'bearer '+token)
    expect(res.body.errno).toBe(0)
    expect(res.body.data.content).toBe(content)
    expect(res.body.data.images[0]).toEqual({ url:urls[0] })
  })
})