const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    guildid: String,
    user: String,
    content: Array,
})

module.exports = mongoose.model('warns', Schema)