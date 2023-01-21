const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const logs = require('../../mongo-db/schemaSuge');
const { findOne } = require('../../mongo-db/schemaSuge');
const cooldown = new Set();

module.exports = {
  name: "sugerencia",
  alias: [""],

  async execute(client, message, args, prefix) {

    const data = await logs.findOne({
      Server: message.guild.id
    })

    if (!data) {
      return message.channel.send({
        embed: {
          color: 15158332,
          description: `<a:alert:907348214036983869> **Error** • ¡El canal de sugerencias no está establecido en este servidor!`
        }
      });;
    }
    const sugerencia = args.join(" ")
    if (!sugerencia) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡Debes escribir una sugerencia!`
      }
    });

    let canal = client.channels.cache.get(data.Canal)
    if (!canal) {
      return message.channel.send({
        embed: {
          color: 15158332,
          description: `<a:alert:907348214036983869> **Error** • ¡El canal de sugerencias no está establecido en este servidor!`
        }
      })
    }

    const embed = new Discord.MessageEmbed()
      .setTitle("✏️ \`|\` ¡Nueva Sugerencia!")
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription(`・**Autor:** ${message.author}\n・**Sugerencia:**\n\`\`\`${sugerencia}\`\`\``)
      .setColor("835aa2")

    try {
      await canal.send(embed).then(async msg => {
        message.channel.send({
          embed: {
            color: 3066993,
            description: `<a:check:907350759782350918> • **¡Sugerencia enviada correctamente!**`
          }
        })
        await msg.react('✅')
        await msg.react('😐')
        await msg.react('❌')
      })
    } catch (error) {
      message.channel.send({
        embed: {
          color: 15158332,
          description: `<a:alert:907348214036983869> • ¡Parece que ha ocurrido un error inesperado!`
        }
      })
    }

  }
}