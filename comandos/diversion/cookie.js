const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "cookie",
    alias: [],

    execute(client, message, args) {

        message.channel.send(`**${message.author.username}**, ¡has recibido una 🍪 de Gunter!

(づ｡◕‿‿◕｡)づ:･ﾟ✧ 🍪`);


    }
}
