const http = require('http')

const server = http.createServer((request, response) => {
  console.log(request.url)
if(request.url === "/about") {
    return response.end('the about page');
} else if(request.url === "/") {
    return response.end('HOME PAGE')
} else {
    response.writeHead(404);
    return response.end('The page was not found')
}
})

server.listen(3000)