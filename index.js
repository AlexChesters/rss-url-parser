const FeedParser = require('feedparser')
const fetch = require('node-fetch')

module.exports = (url) => {
  return new Promise((resolve, reject) => {
    const events = []

    const parser = new FeedParser()

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          return reject(new Error(`Bad status code: ${res.status}`))
        }
        res.body.pipe(parser)
      })
      .catch((err) => reject(err))

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
