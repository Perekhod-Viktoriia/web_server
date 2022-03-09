const express = require('express')
const fs = require('fs')
const getList = require("./actions/getList");
const addToList = require("./actions/addToList");
const updateList = require("./actions/updateList");
const clearList = require("./actions/clearList");
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
    .get('/', getList)
    .post('/add', addToList)
    .put('/', updateList)
    .delete('/', clearList)

app.listen(3000)