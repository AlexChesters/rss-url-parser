const FeedParser = require('feedparser')
const request = require('request')

module.exports = function (url) {
  return new Promise(function (resolve, reject) {
    const events = []

    const req = request(url)
    const parser = new FeedParser()

    req.on('error', (err) => {
      return reject(err)
    })

    req.on('response', (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Bad status code: ${res.statusCode}`))
      }
      return req.pipe(parser)
    })

    parser.on('error', (err) => {
      return reject(err)
    })

    parser.on('end', () => {
      return resolve(events)
    })

    parser.on('readable', () => {
      let item = parser.read()

      while (item) {
        events.push(item)
        item = parser.read()
      }
    })
  })
}
