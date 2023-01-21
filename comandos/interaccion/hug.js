const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const star = require('star-labs');

module.exports = {
  name: "hug",
  alias: [""],

  async execute(client, message, args) {

    let hug = message.mentions.users.first()
    if (!hug) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Dedes mencionar a alguien para abrazar!`
      }
    });

    const embed = new Discord.MessageEmbed()
      .setDescription(`**${message.author}** Le dió un fuerte abrazo a ${hug}`)
      .setImage(star.hug())
      .setColor("835aa2")
      .setTimestamp();
    message.channel.send(embed);


  }
}