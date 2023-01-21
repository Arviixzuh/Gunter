const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "play",
  alias: ["p"],

  execute(client, message, args, prefix) {

    if (!message.member.voice.channel) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Debes estar en un canal de voz!`
      }
    })

    const cancion = args.join(" ")
    if (!cancion) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **${message.author.username}** • Utiliza ${prefix}play \`[cancion]\` o \`[cancionURL]\``
      }
    })

    if (!message.guild.me.permissionsIn(message.member.voice.channel).has('CONNECT')) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tengo permiso para conectarme a este canal!`
      }
    });

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Debes estar en el mismo canal de voz que yo!`
      }
    })

    client.distube.play(message, cancion)
    message.channel.send("🔍 **Buscado...**")

  }
}