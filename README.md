# rss-url-parser

A simple node module to parse an RSS feed URL and return an array of JSON objects

# Installation
`npm install rss-url-parser --save`

# Usage
```javascript
const parser = require('rss-url-parser')

parser.parse(http://mydomain.com/rss).then((data) => console.log(data))
```
