const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    Server: String,
    Canal: String
})

module.exports = mongoose.model('suge', Schema)