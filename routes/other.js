const router = require('koa-router')()
const fs = require('fs')

router.get('/*',(ctx,next) => {
  ctx.type='html'
  ctx.body=fs.createReadStream('./build/index.html')
})

module.exports = router