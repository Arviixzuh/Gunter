const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const star = require('star-labs');

module.exports = {
  name: "patear",
  alias: [""],

  async execute(client, message, args) {

    let kick = message.mentions.users.first()
    if (!kick) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Dedes mencionar a alguien para patear!`
      }
    });

    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author} Le dió una patada a ${kick}`)
      .setImage(star.kick())
      .setColor("835aa2")
      .setTimestamp();
    message.channel.send(embed);


  }
}