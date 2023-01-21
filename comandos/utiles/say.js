const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "say",
  alias: [""],

  async execute(client, message, args) {

    let mensaje = args.join(" ");

    var perms = message.member.hasPermission("ADMINISTRATOR");
    if (!perms) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tienes permisos para usar este comando!`
      }
    })

    if (!args[0]) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Debes escribir el contenido del mensaje!`
      }
    })

    for (let t = 0; mensaje.toLowerCase().includes("mierda") || mensaje.toLowerCase().includes("maldita") || mensaje.toLowerCase().includes("pendaja") || mensaje.toLowerCase().includes("puto") || mensaje.toLowerCase().includes("concha") || mensaje.toLowerCase().includes("pendejo") || mensaje.toLowerCase().includes("puta") || mensaje.toLowerCase().includes("perra"); t++) {
      if (t) return message.channel.send({
        embed: {
          color: 15158332,
          description: `<a:alert:907348214036983869> **${message.author.username}** • ¡No puedo decir malas palabras!`
        }
      })
    }

    for (let i = 0; mensaje.includes("@everyone") || mensaje.includes("@here"); i++) {
      if (i) return message.channel.send({
        embed: {
          color: 15158332,
          description: `<a:alert:907348214036983869> **${message.author.username}** • ¡No se permiten menciones!`
        }
      })
    }

    if (message.mentions.users.size !== 0 || message.mentions.roles.size !== 0) {
      return message.channel.send({
        embed: {
          color: 15158332,
          description: `<a:alert:907348214036983869> **${message.author.username}** • ¡No se permiten menciones!`
        }
      })
    }

    try {
      await message.channel.send(mensaje);
    } catch (error) {
      return;
    }

  }
}