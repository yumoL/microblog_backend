const router = require('koa-router')()
const { create } = require('../controllers/blogHome')
const { genValidator } = require('../middlewares/validatorMiddleware')
const blogValidate = require('../validator/blogValidator')
router.prefix('/api/blog')

router.post('/create/:userId', genValidator(blogValidate), async(ctx, next ) => {
  const { content, urls } = ctx.request.body
  const userId = ctx.params.userId
  ctx.body = await create( ctx, { userId, content, urls })
})

module.exports = router