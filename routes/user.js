
/**
 * @description user api
 */
const router = require('koa-router')()
const { isExist, register, login } = require('../controllers/user')
const userValidate = require('../validator/userValidator')
const { genValidator } = require('../middlewares/validatorMiddleware')

router.prefix('/api/user')

router.post('/isExist', async (ctx, next) => {
  const { userName } = ctx.request.body
  ctx.body = await isExist(userName)
})

router.post('/register', genValidator(userValidate), async (ctx, next) => {
  const { userName, password } = ctx.request.body
  ctx.body = await register(ctx, userName, password)
})

router.post('/login', async (ctx, next) => {
  const { userName, password } = ctx.request.body
  ctx.body = await login(ctx, userName, password)
})

module.exports = router