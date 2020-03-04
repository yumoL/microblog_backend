/**
 * test discover api
 */
const server = require('../server')
const { Blog } = require('../../../database/models')
const { registerAndLogin, createBlog } = require('../testHelper')

describe('discover page', () => {
  let userId
  let token
  let content1 = 'automated content' + Date.now()
  let urls = ['/test1.png', '/test2.png']
  beforeEach(async () => {
    await Blog.destroy({ where: {} })
    let loggedInUser = await registerAndLogin()
    userId = loggedInUser.id
    token = loggedInUser.token
    await createBlog({ token, userId, content: content1, urls })

    //register and login as another user
    loggedInUser = await registerAndLogin(false) //do not delete previous registered user
    userId = loggedInUser.id
    token = loggedInUser.token
    await createBlog({ token, userId, content: 'another user blog', urls:['/test3.png'] })
  })

  test('Can get blogs of all users', async() => {
    const res = await server.get('/api/blog/discover/0')
      .set('Authorization','bearer '+token)
    expect(res.body.errno).toBe(0)
    expect(res.body.data.blogList.length).toBe(2)
    //expect(res.body.data.blogList[0].content).toContain(content1)
    //expect(res.body.data.blogList[0].images[0]).toEqual({ url:urls[0] })
  })
})