const router = require('koa-router')()
router.prefix('/api/blog')
const { getProfileBlogList } = require('../controllers/blogProfile')

router.get('/profile/:userId/:pageIndex', async(ctx, next ) => {
  const userId = ctx.params.userId
  const pageIndex = ctx.params.pageIndex
  ctx.body = await getProfileBlogList({ userId, pageIndex })
})

module.exports = router