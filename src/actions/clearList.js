const fs = require('fs')

function clearList(req,res){
    fs.writeFileSync('database.txt', '')
    res.send('')

}
module.exports = clearList