const { Writable, Readable , Stream} = require('stream')

class MyCustomWritable extends Writable {
  _write(chunk, encoding ,callback) {
    // ...
    console.log('writing: '+ chunk.toString());
    callback();
  }
}

const myCustomWritable = new MyCustomWritable();

process.stdin.pipe(myCustomWritable);