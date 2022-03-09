const express = require('express')
const fs = require('fs')
const app = express()

app.use((req, res, next) => {
    req.rawBody = '';

    req.on('data', (chunk) => {
        req.rawBody += chunk;
    });

    req.on('end', () => {
        next();
    })
});

app.use((req, res, next) => {
    console.log(req.method, req.hostname, req.url)
    next()
})

app
    .get('/', (req, res) => {
        const data = fs.readFileSync('database.txt').toString()
        res.send(data)
    })
    .post('/add', (req, res) => {
        const data = req.rawBody
        fs.appendFileSync('database.txt', '\n' + data)
        console.log(data)
        res.send('')
    })
    .put('/', (req, res) => {
        fs.writeFileSync('database.txt', req.rawBody)
        res.send('')
    })
    .delete('/', (req, res) => {
        fs.writeFileSync('database.txt', '')
        res.send('')
    })

app.listen(3000)