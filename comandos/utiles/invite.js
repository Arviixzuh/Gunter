const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "invite",
    alias: [], 

    execute (client, message, args,) {

   const embed = new Discord.MessageEmbed()
   .setDescription(`<a:blue:907371810138488842> **${message.author.username}** • Invitame a tu servidor haciendo click [aquí](https://discord.com/oauth2/authorize?client_id=908862622672236635&scope=bot&permissions=8)`)
   .setColor("BLUE")
   message.channel.send(embed)


    }
}

