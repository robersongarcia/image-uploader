const {response} =  require('express')

const home = (req, res = response) => {
    res.send("Hello World")
}

module.exports = {
    home
}