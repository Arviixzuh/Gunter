const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');
const star = require('star-labs');

module.exports = {
    name: "kiss",
    alias: [""], 

    async execute (client, message, args) {

      let beso = message.mentions.users.first()
      if(!beso) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Dedes mencionar a alguien para besar!`
    }});
 
  const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.author.username}** le dio un beso a **${beso.username}**`)
    .setImage(star.kiss())
    .setColor("835aa2")
    .setTimestamp();
  message.channel.send(embed);


    }
}