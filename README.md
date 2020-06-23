# rss-url-parser
![CI](https://github.com/AlexChesters/rss-url-parser/workflows/CI/badge.svg)

A simple node module to parse an RSS feed URL and return an array of JSON objects

# Installation
`npm install rss-url-parser --save`

# Usage
```javascript
const parser = require('rss-url-parser')

await parser('http://mydomain.com/rss')
```
