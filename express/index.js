const http = require('http')

const server = http.createServer((request, response) =>{
    response.write("<p> Merhaba, ben bir http sunucusuyum. Nodemon ile. </p>")
    response.end()
})

server.listen(3000)