const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ban",
  alias: [""],

  async execute(client, message, args) {

    var razon = args.slice(1).join(' ')

    if (!razon) {
      razon = 'No Especificada.'
    }

    var perms = message.member.hasPermission("BAN_MEMBERS");
    if (!perms) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tienes permisos para usar este comando!`
      }
    });

    if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tengo permisos para ejecutar este comando!`
      }
    });

    const persona = message.mentions.members.first()
    if (!persona) {
      return message.channel.send({
        embed: {
          color: 15158332,
          description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Debes mencionar a un usuario!`
        }
      });
    }

    const aplicacion = message.mentions.users.first();
    if (aplicacion.bot) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **${message.author.username}** • ¡No puedes banear a un bot!`
      }
    });

    if (persona === message.author) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No puedes banearte a ti mismo!`
      }
    });

    if (!message.guild.member(persona).bannable) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No puedo banear a ese usuario! Su jerarquía de roles es superior/igual que la mía.`
      }
    });

    try {
      await message.guild.members.ban(persona);
      const embed = new Discord.MessageEmbed()
        .setDescription(`**¡El usuario ${persona} fue baneado correctamente!**\n\n📋 **Razón:** ${razon}\n🔨 **Moderador:** ${message.author.username}\n\n[[unban]](https://unban)`)
        .setColor("RED")
      await message.channel.send(embed)
    } catch (error) {
      await message.channel.send({
        embed: {
          color: 15158332,
          description: `<a:alert:907348214036983869> • ¡Parece que ha ocurrido un error inesperado!`
        }
      })
    }
  }
}