const fs = require('fs')

function getList(req, res) {
    const data = fs.readFileSync('database.txt').toString()
    res.send(data)
}

module.exports = getList