const { ErrorModel, SuccessModel } = require('../model/ResModel')
const { uploadFileSizeFailInfo } = require('../model/ErrorInfo')
const fse = require('fs-extra')
const path = require('path')

//file max size = 1M
const MAX_SIZE = 1024*1024*1024

//folder to save uploaded files
const DIST_FOLDER_PATH = path.join(__dirname, '..', 'uploadedFiles')

//create folder if it's not existed
fse.pathExists(DIST_FOLDER_PATH).then(exist => {
  if(!exist) {
    fse.ensureDir(DIST_FOLDER_PATH)
  }
})

async function saveFiles(ctx, files) {
  let data = []
  console.log('toSave', files)
  for(let i=0;i<files.length;i++){
    console.log(i, files[i])
    const { name, size, path:filePath } = files[i]
    if(size>MAX_SIZE){
      //delete file
      await fse.remove(filePath)
      ctx.status = 400
      return new ErrorModel(uploadFileSizeFailInfo)
    }
    const fileName = Date.now() + '_' + name
    const distFilePath = path.join(DIST_FOLDER_PATH, fileName)
    await fse.move(filePath, distFilePath)
    data.push('/' + fileName)
  }
  return new SuccessModel(data)
}

module.exports = {
  saveFiles
}