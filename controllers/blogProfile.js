const { getBlogListByUser } = require('../services/blog')
const { PAGE_SIZE } = require('../constants')
const { SuccessModel } = require('../model/ResModel')

async function getProfileBlogList({ userId, pageIndex = 0 }){
  const res = await getBlogListByUser({
    userId,
    pageIndex,
    pageSize: process.env.PAGE_SIZE || PAGE_SIZE
  })
  console.log('blogList', res.blogList)
  return new SuccessModel({
    blogList: res.blogList,
  })
}

module.exports = { getProfileBlogList }