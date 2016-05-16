const parser = require('../../')

const nock = require('nock')

describe('Common fetcher', function () {
  it('should reject with the appropriate error if an error is encountered', function (done) {
    nock('http://foo.com')
      .get('/')
      .replyWithError({'message': 'something awful happened'})
    parser('http://foo.com')
      .then(function () {
        done.fail(new Error('Promise should not be resolved'))
      })
      .catch(function (error) {
        expect(error).toEqual({message: 'something awful happened'})
        done()
      })
  })

  it('should reject with the appropriate error for a 404', function (done) {
    nock('http://foo.com')
      .get('/')
      .reply(404)
    parser('http://foo.com')
      .then(function () {
        done.fail(new Error('Promise should not be resolved'))
      })
      .catch(function (error) {
        expect(error).toEqual({message: 'Bad status code: 404'})
        done()
      })
  })

  it('should reject with the appropriate error if the response is not valid XML', function (done) {
    nock('http://foo.com')
      .get('/')
      .reply(200, '<h1>Some html</h1>')
    parser('http://foo.com')
      .then(function () {
        done.fail(new Error('Promise should not be resolved'))
      })
      .catch(function (error) {
        expect(error).toEqual(new Error('Not a feed'))
        done()
      })
  })
})
