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
  console.log('hhhhhhhhh',fileData.file.length)
  let files = []
  if(!fileData.file.length){
    files.push(fileData['file'])
    console.log('single', files)
  } else {
    files=fileData.file
  }
  //const file = ctx.req.files['file']
  //const { size, path, name, type } = file
  ctx.body = await saveFiles(ctx, files)
  // ctx.body = await saveFiles(ctx, {
  //   name,
  //   type,
  //   size,
  //   filePath: path
  // })
})

module.exports = router