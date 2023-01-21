const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    Server: String,
    Role: String
})

module.exports = mongoose.model('muterole', Schema)