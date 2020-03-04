/**
 * @description cache for blogs
 */

const { get, set } = require('./_redis')
const { getBlogListByUser } = require('../services/blog')

const KEY_PREFIX = 'microblog:square:'

/**
 * try to get blogs from cache. If blogs are not in cache, get them from db and save them to cache
 * @param {number} pageIndex
 * @param {number} pageSize
 */
async function getCacheList({ pageIndex, pageSize }) {
  const key = `${KEY_PREFIX}${pageIndex}_${pageSize}`
  //try to get blogs from cache
  const cacheResult = await get(key)
  if(cacheResult != null){
    // have cache
    console.log('have cache')
    return cacheResult
  }

  //no cache, read from db
  const result = await getBlogListByUser({ pageIndex, pageSize })

  // set cache, timeout=60s
  set(key,result,60)
  return result
}

module.exports = {
  getCacheList
}