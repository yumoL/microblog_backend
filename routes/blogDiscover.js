const router = require('koa-router')()
router.prefix('/api/blog')
const { getDiscoverBlogList } = require('../controllers/blogDiscover')

router.get('/discover/:pageIndex', async(ctx,next) => {
  const pageIndex = ctx.params.pageIndex
  ctx.body = await getDiscoverBlogList(pageIndex)
})

module.exports = router