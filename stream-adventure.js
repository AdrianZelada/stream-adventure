const through2 = require('through2')
let count = 0;
process.stdin.pipe(through2(function(line, _, next){    
    this.push(count%2 ==0 ? line.toString().toLowerCase(): line.toString().toUpperCase());        
    count++;
    next();
})).pipe(process.stdout);