
const through = require('through2')
const stream = through(  function (buffer, encoding, next) {
    // ...
    this.push(buffer.toString().toUpperCase());
    next();
  })

  process.stdin.pipe(stream).pipe(process.stdout);