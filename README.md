# rss-url-parser
![CI](https://github.com/AlexChesters/rss-url-parser/workflows/CI/badge.svg)
[![npm version](https://badge.fury.io/js/uk-traffic.svg)](https://badge.fury.io/js/uk-traffic)

A simple node module to parse an RSS feed URL and return an array of JSON objects

# Installation
`npm install rss-url-parser --save`

# Usage
```javascript
const parser = require('rss-url-parser')

await parser('http://mydomain.com/rss')
```
