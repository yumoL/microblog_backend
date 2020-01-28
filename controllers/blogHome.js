/**
 * @description home controller
 */

const { createBlog } = require('../services/blog')
const { SuccessModel, errorModel } = require('../model/ResModel')
const {
  createBlogFail
} = require('../model/ErrorInfo')

async function create( ctx, { userId, content, image }){
  try{
    const blog = await createBlog({
      userId,
      content,
      image
    })
    return new SuccessModel(blog)
  }catch(e){
    ctx.status = 404
    console.log(e.message, e.stack)
  }
  ctx.status = 400
  return new errorModel(createBlogFail)
}

module.exports = {
  create
}