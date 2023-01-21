const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const setprefix = require('../../mongo-db/schemaPrefix');

module.exports = {
  name: "setprefix",
  alias: ["sp", "prefix"],

  async execute(client, message, args) {

    var perms = message.member.hasPermission("ADMINISTRATOR");
    if (!perms) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tienes permisos para usar este comando!`
      }
    });

    if (!args[0]) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡Debes especificar un nuevo prefix!`
      }
    });

    if (args[0].length > 5) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡El nuevo prefix debe ser menor a 5 caracteres!`
      }
    });

    const data = await setprefix.findOne({
      Server: message.guild.id
    })
    if (!data) {
      const data = new setprefix({
        Server: message.guild.id,
        Prefix: args[0]
      })
      data.save()
      message.channel.send({
        embed: {
          color: 3066993,
          description: `<a:check:907350759782350918> • **El prefix fue cambiado correctamente**`
        }
      });
    } else {
      await setprefix.findOneAndUpdate({
        Server: message.guild.id,
        Prefix: args[0]
      })
      data.save()
      message.channel.send({
        embed: {
          color: 3066993,
          description: `<a:check:907350759782350918> • **El prefix fue cambiado correctamente**`
        }
      });

    }

  }
}