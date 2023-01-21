const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const ban = require('./ban');

module.exports = {
  name: "hackban",
  alias: [""],

  async execute(client, message, args) {

    const embed = new Discord.MessageEmbed()
      .setDescription("<a:alert:907348214036983869> **Error** • ¡Este comando se encuentra en mantenimiento!")
      .setColor("RED")
    message.channel.send(embed)

    var razon = args.slice(1).join(' ')

    if (!razon) {
      razon = 'No Especificada.'
    }

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tienes permisos para usar este comando!`
      }
    });

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tengo permisos para ejecutar este comando!`
      }
    });

    const id = args[0];
    if (!id) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡Debes colocar una ID!`
      }
    });

    if (id === message.author.id) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No puedes banearte a ti mismo!`
      }
    });

    if (id.bot) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **${message.author.username}** • ¡No puedes banear a un bot!`
      }
    });

    try {
      await message.guild.members.ban(id);
      const embed = new Discord.MessageEmbed()
        .setDescription(`**¡El usuario <@${id}> fue baneado correctamente!**\n\n📋 **Razón:** ${razon}\n🔨 **Moderador:** ${message.author.username}\n\n[[unban]](https://unban)`)
        .setColor("RED")
      await message.channel.send(embed)
    } catch (error) {
      await message.channel.send({
        embed: {
          color: 15158332,
          description: `<a:alert:907348214036983869> • ¡La ID mencionada no existe!`
        }
      })
    }
  }
}