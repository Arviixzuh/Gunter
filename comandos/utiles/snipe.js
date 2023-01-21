const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "snipe",
  alias: [""],

  execute(client, message, args) {

    const channel = message.mentions.channels.first() || message.channel;
    const msg = client.snipes.get(channel.id)

    if (channel.guild.id !== message.guild.id) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡El canal mencionado no pertenece a este servidor!`
      }
    });

    if (channel.type == 'voice' || channel.type == 'category') return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡Debes mencionar un canal de texto!`
      }
    });

    if (!message.guild.me.permissionsIn(channel).has('VIEW_CHANNEL')) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tengo acceso a ese canal!`
      }
    });

    if (!msg) {
      message.channel.send({
        embed: {
          color: 15158332,
          description: `<a:alert:907348214036983869> **Error** • ¡No hay mensajes borrados!`
        }
      });
    } else {
      const embed = new Discord.MessageEmbed()

        .setThumbnail(msg.delete.displayAvatarURL())
        .setDescription(`**Mensaje borrado de** ${msg.delete}\n\n**Mensaje:** ${msg.content}\n**Canal:** <#${msg.canal.id}>`)
        .setColor("RED")

      message.channel.send(embed)
    }

  }
}