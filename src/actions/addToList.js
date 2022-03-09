const fs = require('fs')

function addToList(req,res){
    const data = req.rawBody
    fs.appendFileSync('database.txt', '\n' + data)
    console.log(data)
    res.send('')
}
module.exports = addToList