const http = require('http');
const { readFileSync } = require('fs')

//get home page
const homePage = readFileSync('./index.html')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end()
    }
    // about page
    else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>about page</h1>')
        res.end()
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>about page</h1>')
        res.end()
    }
})

server.listen(5000)