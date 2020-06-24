/* eslint-env jest */

const fs = require('fs')

const nock = require('nock')

const parser = require('./')

describe('rss-url-parser', () => {
  test('rejects when an error occurs during the request', async () => {
    nock('https://foo.com')
      .get('/')
      .replyWithError({ message: 'something awful happened' })

    await expect(parser('https://foo.com')).rejects.toThrow()
  })
  test('rejects when a non-200 status code is received', async () => {
    nock('https://foo.com')
      .get('/')
      .reply(404)

    await expect(parser('https://foo.com')).rejects.toEqual(new Error(
      'Bad status code: 404'
    ))
  })
  test('rejects if the response is not valid XML', async () => {
    nock('https://foo.com')
      .get('/')
      .reply(200, '<h1>Some html</h1>')

    await expect(parser('https://foo.com')).rejects.toEqual(new Error(
      'Not a feed'
    ))
  })
  test('resolves if the response is expected', async () => {
    const stubData = fs.readFileSync('./stub-data/feed.xml', 'utf-8')
    nock('https://foo.com')
      .get('/')
      .reply(200, stubData)

    const expected = expect.arrayContaining([expect.objectContaining({
      author: expect.any(String)
    })])

    await expect(parser('https://foo.com')).resolves.toEqual(expected)
  })
})
