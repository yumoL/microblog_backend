/**
 * @description blog service
 */

const { Blog, Image, User } = require('../database/models')
const { formatUser } = require('./_format')

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

/**
 * Get bloglist by username
 */
async function getBlogListByUser({ userId, pageIndex=0, pageSize=5 }){
  const userWhereOpts = {}
  if(userId){
    userWhereOpts.id = userId
  }
  const res = await Blog.findAndCountAll({
    limit: Number(pageSize), //how many blogs in page
    offset: Number(pageSize * pageIndex), //how many blogs should be jumped
    order: [
      ['id', 'desc']
    ],
    include: [
      {
        model: User,
        attributes: ['userName','picture'],
        where: userWhereOpts,
        as: 'user'
      },
      {
        model: Image,
        attributes: ['url'],
        as: 'images'
      }
    ]
  })
  let blogList = res.rows.map(row => row.dataValues)
  blogList = blogList.map(blogItem => {
    const user = blogItem.user.dataValues
    blogItem.user = formatUser(user)
    return blogItem
  })
  return {
    //res.count is the total number of all blogs, it has nothing to do with the limit.
    //res.rows is the query result considering the limit
    blogList
  }
}

module.exports = {
  createBlog,
  getBlogListByUser
}