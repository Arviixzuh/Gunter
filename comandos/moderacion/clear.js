const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "clear",
  alias: [],

  async execute(client, message, args) {

    var perms = message.member.hasPermission("ADMINISTRATOR");
    if (!perms) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tienes permisos para usar este comando!`
      }
    }).then((m) => m.delete({ timeout: 10000 }))

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tengo permisos para ejecutar este comando!`
      }
    }).then((m) => m.delete({ timeout: 10000 }))

    if (!args[0]) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡Debes especificar el numero de mensajes para borrar!`
      }
    }).then((m) => m.delete({ timeout: 10000 })).catch(error => { return console.log });

    let number = args[0]
    if (isNaN(number)) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡Debes colocar un valor numerico!`
      }
    }).then((m) => m.delete({ timeout: 10000 }))

    number = parseInt(number)
    if (number >= 101) {
      message.channel.send({
        embed: {
          color: 15158332,
          description: `<a:alert:907348214036983869> • ¡La cantidad maxima para borrar es 100 mensajes!`
        }
      }).then((m) => m.delete({ timeout: 10000 }))
    }

    if (number >= 1 && number <= 100) {
      message.channel.bulkDelete(number + 0)
      message.channel.send({
        embed: {
          color: 3066993,
          description: `<a:check:907350759782350918> • ¡Se eliminaron **${number}** mensajes!`
        }
      }).then((m) => m.delete({ timeout: 10000 }))
    }

    if (number <= 0) {
      message.channel.send({
        embed: {
          color: 15158332,
          description: `<a:alert:907348214036983869> **Error** • ¡Coloca un numero mayor!`
        }
      }).then((m) => m.delete({ timeout: 10000 }))
    }
  }

}