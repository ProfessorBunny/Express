const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).end('Home Page')
})
app.get('/about', (req, res) => {
    res.status(200).end('About Page')
})

app.all('*', (req, res) => {
    res.status(404).end("Resouce not found")
})

app.listen(5000, () => {
    console.log("server is listening on port 5000")
})