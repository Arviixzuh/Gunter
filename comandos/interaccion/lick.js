const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const star = require('star-labs');

module.exports = {
  name: "lick",
  alias: [""],

  async execute(client, message, args) {

    let lick = message.mentions.users.first()
    if (!lick) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Dedes mencionar a alguien para lamer!`
      }
    });

    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author} lamió a ${lick}`)
      .setImage(star.lick())
      .setColor("835aa2")
      .setTimestamp();
    message.channel.send(embed);


  }
}