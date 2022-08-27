const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');
const star = require('star-labs');

module.exports = {
    name: "pat",
    alias: [""], 

    async execute (client, message, args) {

      let pat = message.mentions.users.first()
      if(!pat) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Dedes mencionar a alguien para darle palmaditas!`
    }});
 
  const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.author.username}** le dio palmaditas a **${pat.username}**`)
    .setImage(star.pat())
    .setColor("835aa2")
    .setTimestamp();
  message.channel.send(embed);


    }
}