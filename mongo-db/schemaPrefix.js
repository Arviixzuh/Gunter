const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    Server: String,
    Prefix: String
})

module.exports = mongoose.model('prefix', Schema)