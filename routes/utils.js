/**
 * @description utils api
 */

const router = require('koa-router')()
//const koaForm = require('formidable-upload-koa')
const { saveFile } = require('../controllers/utils')
const formidable = require('koa2-formidable')
const koaForm = require('formidable-upload-koa')

router.prefix('/api/utils')

//upload a picture
router.post('/upload', koaForm(), async(ctx,next) => {
  const file = ctx.req.files['file']
  const { size, path, name, type } = file
  ctx.body = await saveFile(ctx, {
    name,
    type,
    size,
    filePath: path
  })
})

module.exports = router