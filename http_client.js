const { request } = require('http')

const options = { method: 'POST' }
// console.log(options)
const req = request('http://localhost:8099/', options, (res) => {
/* Do something with res*/
    res.pipe(process.stdout);
    // console.log(res);
})
process.stdin.pipe(req)