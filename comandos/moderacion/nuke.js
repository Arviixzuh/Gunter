const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "nuke",
  alias: [""],

  execute(client, message, args) {

    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tienes permisos para usar este comando!`
      }
    });
    if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tengo permisos para ejecutar este comando!`
      }
    });

    message.channel.clone().then((ch) => {
      ch.setParent(message.channel.parent.id);
      ch.setPosition(message.channel.position);
      message.channel.delete()

      ch.send({
        embed: {
          color: 15105570,
          description: `**¡Canal nukeado! ☢️**`,
        }
      });
    })


  }
}