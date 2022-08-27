const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "volume",
    alias: ["v", "volumen"], 

    async execute (client, message, args) {

      const queue = client.distube.getQueue(message)

      if(!message.member.voice.channel) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Debes estar en un canal de voz!`
    }})

      if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Debes estar en el mismo canal de voz que yo!`
    }})

      if(!queue) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • ¡No hay canciones en la lista!`
    }})

      const volume = args[0]

      if(!volume) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Debes escribir un numero valido!`
    }})
      if(!isNaN) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Debes escribir un numero valido!`
    }})

      if(volume < 1) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • El numero debe ser mayor que \`0%\``
    }})
      if(volume > 100) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • El numero debe ser menor que \`100%\``
    }})


      client.distube.setVolume(message, volume)

      const embed = new Discord.MessageEmbed()
      .setDescription(`<a:disco:913640838884655134> **El volumen fue establecido a** \`${volume}%\``)
      .setColor("835aa2")
      message.channel.send(embed)


    }
}