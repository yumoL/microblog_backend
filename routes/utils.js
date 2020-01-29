/**
 * @description utils api
 */

const router = require('koa-router')()
//const koaForm = require('formidable-upload-koa')
const { saveFiles } = require('../controllers/utils')
const koaForm = require('formidable-upload-koa')

router.prefix('/api/utils')

const options = {
  multiples: true
}

//upload a picture
router.post('/upload', koaForm(options), async(ctx,next) => {
  const fileData = ctx.req.files
  let files = []
  if(!fileData.file.length){
    files.push(fileData['file'])
  } else {
    files=fileData.file
  }
  ctx.body = await saveFiles(ctx, files)

})

module.exports = router