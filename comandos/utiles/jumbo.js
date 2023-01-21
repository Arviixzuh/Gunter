const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "jumbo",
  alias: [""],

  execute(client, message, args) {

    if (!args[0]) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡Debes colocar un emoji!`
      }
    });

    let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
    if (!emoji) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡Este emoji no es valido!`
      }
    });

    const embed = new Discord.MessageEmbed()

      .setTitle("Emoji")
      .setColor("835aa2")
      .setImage(emoji.url)

    message.channel.send(embed)

  }
}