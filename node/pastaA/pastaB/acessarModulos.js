const moduloA = require('../../moduloA')
console.log(moduloA.bomDia)

const c = require('./pastaC')
console.log(c.helloWorld)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)