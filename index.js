const http = require('http')
const port = 5001

const server = http.createServer((req, res) => {
    res.end('Hola mundo')
})

server.listen(port, () => {
    console.log('Arranca el servidor')
})