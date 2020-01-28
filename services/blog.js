/**
 * @description blog service
 */

const { Blog } = require('../database/models')

async function createBlog({ userId, content, image }){
  const result = await Blog.create({
    userId,
    content,
    image
  })
  return result.dataValues
}

module.exports = {
  createBlog
}