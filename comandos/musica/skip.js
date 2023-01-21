const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "skip",
  alias: ["s"],

  execute(client, message, args) {

    const queue = client.distube.getQueue(message)

    if (!message.member.voice.channel) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Debes estar en un canal de voz!`
      }
    })

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Debes estar en el mismo canal de voz que yo!`
      }
    })

    if (!queue) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **${message.author.username}** • ¡No hay canciones en la lista!`
      }
    })

    client.distube.skip(message)

    message.react("👍")

    const embed = new Discord.MessageEmbed()
      .setDescription(`<a:disco:913640838884655134> • **¡La canción fue saltada!**`)
      .setColor("835aa2")
    message.channel.send(embed)


  }
}