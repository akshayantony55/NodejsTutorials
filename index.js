const express = require('express');
const path = require('path');
const app = express();

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
});

app.get('/about', (request, response) => {
    response.sendFile(path.resolve(__dirname,'about.html'))
});


app.get('/contact', (request, response) => {
    response.sendFile(path.resolve(__dirname,'contact.html'))
});
app.listen(3000, () => {
    console.log("App listening on port 3000");
});
app.use(express.static('public'))

// const http = require('http');

// const fs = require('fs');

// const aboutPage = fs.readFileSync('about.html');
// const homePage = fs.readFileSync('index.html');
// const contactPage = fs.readFileSync('contact.html');

// const server = http.createServer((request, response) => {
//   console.log(request.url)
// if(request.url === "/about") {
//     return response.end(aboutPage);
// } else if(request.url === "/") {
//     return response.end(homePage)
// }else if(request.url === "/contact") {
//     return response.end(contactPage)
// } else {
//     response.writeHead(404);
//     return response.end('The page was not found')
// }
// })

// server.listen(3000)