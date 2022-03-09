const fs = require('fs')

function updateList(req,res){
    fs.writeFileSync('database.txt', req.rawBody)
    res.send('')
}
module.exports = updateList