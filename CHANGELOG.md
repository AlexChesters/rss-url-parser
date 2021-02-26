# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.2] - 2021-02-26
* Fixes two security vulnerabilities
    * [CVE-2020-15168](https://github.com/advisories/GHSA-w7rc-rwvf-8q5r)
    * [CVE-2020-7789](https://github.com/advisories/GHSA-5fw9-fq32-wv5p)

## [2.1.1] - 2020-07-23
Fixes a security vulnerability
([lodash (#1523)](https://www.npmjs.com/advisories/1523))

## [2.1.0] - 2020-06-30
Slightly tweaked the example in the README to make it more useful

## [2.0.0] - 2020-06-24
If an error occurs when fetching the feed, an
[Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
object will be returned, previously this was a plain JavaScript object.

## [1.2.0] - 2020-06-23
Bump all dependencies to latest version

## [1.1.0] - 2019-10-24
Bump to v2 of `feedparser`

## [1.0.0] - 2016-05-16
First release of the library
