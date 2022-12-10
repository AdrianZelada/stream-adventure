const combine = require('stream-combiner')
const split = require('split2');
const through2 = require('through2')
const zlib = require("zlib");
module.exports = function () {

const genre = {};
return combine(
    split(),
    through2(function(chunk, _, next){
        const data = JSON.parse(chunk.toString());
        if(data.type == 'genre') {

            if(genre.name != null) {
                this.push(JSON.stringify(genre) + '\n');
            }
            genre.name = data.name;
            genre.books = [];
        } else {
            genre.books.push(data.name);
        }        
        next();
    }, function(next){
        if(genre.name != null) {
            this.push(JSON.stringify(genre) + '\n');
        }
        next();
    }),
    zlib.createGzip()
    // read newline-separated json,
    // group books into genres,
    // then gzip the output
    )

   
}

