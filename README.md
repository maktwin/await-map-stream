[![Build Status](https://travis-ci.org/maktwin/await-map-stream.svg?branch=master)](https://travis-ci.org/maktwin/await-map-stream)

# NAME
await-stream - Lightweight stream mapper

# SYNOPSIS
Common usage:

```javascript
const awaitStream = require('await-map-stream');
let doubler = awaitStream(data => Promise.resolve(data * 2));
stream.pipe(doubler);

let mapper = awaitStream(async data => await mongodb.findOne(data.id));
request(url).pipe(JSONStream.parse('results.*')).pipe(mapper)
```

# INSTALL

#### nodejs/npm

```bash
npm install await-map-stream
```

# AUTHOR
maktwin (Maksym Panchokha)

# BUGS
Please report any bugs or feature requests to Github https://github.com/maktwin/await-map-stream