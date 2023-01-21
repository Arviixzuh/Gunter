const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const setsugerencia = require('../../mongo-db/schemaSuge');

module.exports = {
  name: "setsugerencia",
  alias: [""],

  async execute(client, message, args) {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tienes permisos para usar este comando!`
      }
    });

    const canalsuge = message.mentions.channels.first();
    if (!canalsuge) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡Debes mencionar un canal!`
      }
    });

    if (!message.guild.me.permissionsIn(canalsuge).has('VIEW_CHANNEL')) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tengo acceso a ese canal!`
      }
    });

    if (!message.guild.me.permissionsIn(canalsuge).has('SEND_MESSAGES')) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tengo permisos para enviar mensajes en ese canal!`
      }
    });

    if (canalsuge.guild.id !== message.guild.id) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡El canal mencionado no pertenece a este servidor!`
      }
    });

    if (canalsuge.type == 'voice' || canalsuge.type == 'category') return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡Debes mencionar un canal de texto!`
      }
    });

    const data = await setsugerencia.findOne({
      Server: message.guild.id
    })
    if (!data) {
      const data = new setsugerencia({
        Server: message.guild.id,
        Canal: canalsuge.id
      })
      data.save()
      message.channel.send({
        embed: {
          color: 3066993,
          description: `<a:check:907350759782350918> • **¡El canal ${canalsuge} fue establecido correctamente!**`
        }
      });
    } else {
      await setsugerencia.findOneAndUpdate({
        Server: message.guild.id,
        Canal: canalsuge.id
      })
      data.save()
      message.channel.send({
        embed: {
          color: 3066993,
          description: `<a:check:907350759782350918> • **¡El canal ${canalsuge} fue establecido correctamente!**`
        }
      });

    }

  }
}