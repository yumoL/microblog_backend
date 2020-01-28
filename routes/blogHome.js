const router = require('koa-router')()
const { create } = require('../controllers/blogHome')

router.prefix('/api/blog')

router.post('/create/:userId', async(ctx, next ) => {
  const { content, image } = ctx.request.body
  const { userId } = ctx.request.params.userId
  ctx.body = await create( ctx, { userId, content, image })
})

module.exports = router