const trumpet = require('trumpet');
const through2 = require('through2')
const tr = trumpet();


const stream = tr.select('.loud').createStream();
stream.pipe(through2(function(chunk, _, next){
    this.push(chunk.toString().toUpperCase());
    next();
})).pipe(stream);
process.stdin.pipe(tr).pipe(process.stdout);


