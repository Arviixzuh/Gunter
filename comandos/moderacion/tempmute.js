const Discord = require("discord.js");
const ms = require("ms");
const { Client, MessageEmbed } = require('discord.js');
const muterole = require('../../mongo-db/schemaMutear');

module.exports = {
  name: "tempmute",
  alias: [],
  async execute(client, message, args, prefix) {

    var razon = args.slice(2).join(' ')
    if (!razon) {

      razon = 'No Especificada.'

    }
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tienes permisos para usar este comando!`
      }
    });

    if (!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tengo permisos para ejecutar este comando!`
      }
    });

    const data = await muterole.findOne({
      Server: message.guild.id
    })

    if (!data) {
      return message.channel.send({
        embed: {
          color: 15158332,
          description: `<a:alert:907348214036983869> **Error** • ¡El rol **mute** no esta establecido en este servidor!\n Utiliza \`setmuterole @rolmute\` para poder usar este comando.`
        }
      });
    }

    let rolemute = message.guild.roles.cache.get(data.Role)
    if (!rolemute) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡El rol **mute** no esta establecido en este servidor!\n Utiliza \`setmuterole @rolmute\` para poder usar este comando.`
      }
    });

    let persona = message.mentions.members.first()

    if (!persona) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡Debes mencionar a un usuario!`
      }
    });

    const time = args[1]
    if (!time) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡Debes decirme la duración del mute!`
      }
    });
    if (isNaN(ms(time)))
      return message.channel.send({
        embed: {
          color: 15158332,
          description: `<a:alert:907348214036983869> **Error** • ¡Debes decirme la duración del mute!`
        }
      });
    let timer = ms(time)

    if (persona.roles.cache.has(data.Role)) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡Este usuario ya está muteado!`
      }
    });

    persona.roles.add(rolemute)

    await setTimeout(async function () {
      await persona.roles.remove(rolemute)

    }, timer)
    const embed = new Discord.MessageEmbed()

      .setColor("ORANGE")
      .setDescription(`**¡El usuario **${persona}** fue muteado correctamente!**\n\n📋 **Razón:** ${razon}\n🔨 **Moderador:** ${message.author.username}\n⏰ **Duración:** ${args[1]}\n\n[[unmute]](https://unmute)`)

    message.channel.send(embed)

  }
}