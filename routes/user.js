
/**
 * @description user api
 */
const router = require('koa-router')()
const { isExist, register, login, changeInfo, changePwd } = require('../controllers/user')
const userValidate = require('../validator/userValidator')
const { genValidator } = require('../middlewares/validatorMiddleware')

router.prefix('/api/user')

router.post('/isExist', async (ctx, next) => {
  const { userName } = ctx.request.body
  ctx.body = await isExist({ userName })
})

router.post('/register', genValidator(userValidate), async (ctx, next) => {
  const { userName, password } = ctx.request.body
  ctx.body = await register(ctx, userName, password)
})

router.post('/login', async (ctx, next) => {
  const { userName, password } = ctx.request.body
  ctx.body = await login(ctx, userName, password)
})

/**
 * Get userinfo by id
 */
router.get('/:id', async (ctx, next) => {
  const id = ctx.params.id
  ctx.body = await isExist({ id })
})

//change info
router.patch('/changeInfo/:id', genValidator(userValidate), async(ctx,next) => {
  const id = ctx.params.id
  const { newUserName, newPicture } = ctx.request.body
  ctx.body = await changeInfo(ctx, { newUserName, newPicture }, id)
})

router.patch('/changePwd/:id', genValidator(userValidate), async(ctx,next) => {
  const id = ctx.params.id
  const { pwd, newPwd } = ctx.request.body
  ctx.body = await changePwd(ctx, { pwd, newPwd }, id)
})

module.exports = router