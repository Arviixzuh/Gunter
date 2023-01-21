const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const mute = require('../../mongo-db/schemaMutear');

module.exports = {
  name: "setmuterole",
  alias: ["smr"],

  async execute(client, message, args) {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tienes permisos para usar este comando!`
      }
    });

    const muterole = message.mentions.roles.first();
    if (!muterole) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡Debes mencionar un rol!`
      }
    });

    const data = await mute.findOne({
      Server: message.guild.id
    })
    if (!data) {
      const data = new mute({
        Server: message.guild.id,
        Role: muterole.id
      })
      data.save()
      message.channel.send({
        embed: {
          color: 3066993,
          description: `<a:check:907350759782350918> • **¡El rol ${muterole} fue establecido correctamente!**`
        }
      });
    } else {
      await mute.findOneAndUpdate({
        Server: message.guild.id,
        Role: muterole.id
      })
      data.save()
      message.channel.send({
        embed: {
          color: 3066993,
          description: `<a:check:907350759782350918> • **¡El rol ${muterole} fue establecido correctamente!**`
        }
      });

    }

  }
}