/**
 * @description test blog and image model
 */

const { Blog, Image } = require('../../../database/models')

test('Correct Blog attributes', () => {
  const content = 'blog content'
  const blog = Blog.build({
    userId: 1,
    content
  })

  expect(blog.userId).toBe(1)
  expect(blog.content).toBe(content)
})

test('Correct Image attributes', () => {
  const url = '/1581426256641_timg.jpeg'
  const image = Image.build({
    url,
    blogId: 1
  })
  expect(image.blogId).toBe(1)
  expect(image.url).toBe(url)
})