const http = require('http')

const server = http.createServer((request, response) =>{
    response.writeHead(200, {'content-type': 'text/html; charset=utf-8'})
    
    if(request.method === 'GET'){

        if(request.url === '/')
            response.write('Index Sayfasındasınız.')
        else if(request.url === '/iletisim')
            response.write('Iletişim sayfasındasınız.')
        else response.write('Böyle bir sayfa bulunamadı.')

        response.end()
    }
})

server.listen(3000)