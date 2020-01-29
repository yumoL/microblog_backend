const router = require('koa-router')()
const { create } = require('../controllers/blogHome')

router.prefix('/api/blog')

router.post('/create/:userId', async(ctx, next ) => {
  const { content, urls } = ctx.request.body
  const userId = ctx.params.userId
  //const { userId } = ctx.params.userId
  console.log('user id', userId)

  ctx.body = await create( ctx, { userId, content, urls })
})

module.exports = router