
const router = require('koa-router')()


router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/profile/:userName', async (ctx, next) => {
  const { userName } = ctx.params
  ctx.body = {
    title: 'this is a profile page',
    userName
  }
})

router.get('/loadMore/:userId/:pageIndex', async (ctx, next) => {
  const { userId, pageIndex } = ctx.params
  ctx.body = {
    title: 'this is loadmore api',
    userId,
    pageIndex
  }
})

module.exports = router