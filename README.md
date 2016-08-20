[![Build Status](https://travis-ci.org/maktwin/await-map-stream.svg?branch=master)](https://travis-ci.org/maktwin/await-map-stream)

# NAME
await-stream - Lightweight stream mapper

# SYNOPSIS
Common usage:

```javascript
const awaitStream = require('../lib/await-stream');
let doubler = awaitStream(data => Promise.resolve(data * 2));
stream.pipe(doubler);
```