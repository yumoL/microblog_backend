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
/**
 * save file
 */
async function saveFile(ctx, { name, type, size, filePath }){
  // file size is too large
  if(size>MAX_SIZE){
    //delete file
    await fse.remove(filePath)

    ctx.status = 400
    return new ErrorModel(uploadFileSizeFailInfo)
  }

  // move file
  const fileName = Date.now() + '_' + name
  const distFilePath = path.join(DIST_FOLDER_PATH, fileName)
  await fse.move(filePath, distFilePath)

  // return file url
  return new SuccessModel({
    url: '/' + fileName
  })
}

module.exports = {
  saveFile
}