/**
 * @description blog service
 */

const { Blog, Image } = require('../database/models')

async function createBlog({ userId, content, urls }){
  const blogResult = await Blog.create({
    userId,
    content
  })
  const savedBlogId = blogResult.dataValues.id
  if(urls){
    await Promise.all(urls.map(async url => await Image.create({
      blogId: savedBlogId,
      url
    })))
  }

  const blog = await Blog.findOne({
    where: { id: savedBlogId },
    include: [{
      model: Image,
      attributes: ['url'],
      as: 'images'
    }]
  })
  return blog.dataValues
}

module.exports = {
  createBlog
}