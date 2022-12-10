const concat = require('concat-stream');
const through = require('through2')
// pipe(concat()).
// process.stdin.pipe(through(function(chunk, _, next) {
//     this.push(chunk.toString().split('').reverse().join(''));
//     next();
// })).pipe(concat())
// .pipe(process.stdout)


process.stdin.pipe(concat((chunk) =>{
    process.stdout.write(chunk.toString().split('').reverse().join(''));
}))
