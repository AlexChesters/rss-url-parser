# rss-url-parser
![CI](https://github.com/AlexChesters/rss-url-parser/workflows/CI/badge.svg)
[![npm version](https://badge.fury.io/js/rss-url-parser.svg)](https://badge.fury.io/js/rss-url-parser)

A simple node module to parse an RSS feed URL and return an array of JSON objects

# Installation
`npm install rss-url-parser --save`

# Usage
```javascript
const parser = require('rss-url-parser')

await parser('http://mydomain.com/rss')
```

# Notices
The stub data used for testing is provided by
[Lorem RSS](https://lorem-rss.herokuapp.com/); The data is licensed under a
Creative Commons Attribution 3.0 Unported License.
