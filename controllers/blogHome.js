/**
 * @description home controller
 */

const { createBlog } = require('../services/blog')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
  createBlogFail
} = require('../model/ErrorInfo')

async function create( ctx, { userId, content, urls }){
  try{
    const blog = await createBlog({
      userId,
      content,
      urls
    })
    return new SuccessModel(blog)
  }catch(e){
    ctx.status = 404
    console.log(e.message, e.stack)
  }
  ctx.status = 400
  return new ErrorModel(createBlogFail)
}

module.exports = {
  create
}