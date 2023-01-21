const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const star = require('star-labs');

module.exports = {
  name: "slap",
  alias: [""],

  async execute(client, message, args) {

    let slap = message.mentions.users.first()
    if (!slap) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Dedes mencionar a alguien para abofetear!`
      }
    });

    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author} Le dió una bofetada a ${slap}`)
      .setImage(star.slap())
      .setColor("835aa2")
      .setTimestamp();
    message.channel.send(embed);


  }
}