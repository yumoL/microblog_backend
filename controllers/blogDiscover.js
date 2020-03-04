
const { PAGE_SIZE } = require('../constants')
const { SuccessModel } = require('../model/ResModel')
const { getCacheList } = require('../cache/blog')

async function getDiscoverBlogList(pageIndex = 0){
  const res = await getCacheList( { pageIndex, pageSize:process.env.PAGE_SIZE || PAGE_SIZE })
  return new SuccessModel({
    allNumber: res.allNumber,
    blogList: res.blogList,
  })
}

module.exports = { getDiscoverBlogList }