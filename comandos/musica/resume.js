const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "resume",
    alias: ["r"], 

    execute (client, message, args) {

      if(!message.member.voice.channel) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Debes estar en un canal de voz!`
    }})

      if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Debes estar en el mismo canal de voz que yo!`
    }})

      const serverQueue = client.distube.getQueue(message)

      if(!serverQueue) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • ¡No hay canciones en la lista!`
    }})

      if(!serverQueue.pause) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • ¡La canción no está pausada!`
    }})

      client.distube.resume(message)
      client.distube.pause(message)
      client.distube.resume(message)

      const embed = new Discord.MessageEmbed()
      .setDescription(`<a:disco:913640838884655134> • **¡La canción fue resumida!**`)
      .setColor("835aa2")
      message.channel.send(embed)


    }
}
