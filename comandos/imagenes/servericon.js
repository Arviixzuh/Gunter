const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "servericon",
  alias: [""],

  execute(client, message, args) {

    let icon = message.guild.iconURL({
      dynamic: true,
      format: "png",
      size: 1024
    });

    if (!icon) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡Este server no tiene icono!`
      }
    })

    const embed = new Discord.MessageEmbed()


      .setDescription(`**${message.guild.name}**`)
      .setImage(icon)
      .setColor("835aa2")

    message.channel.send(embed)


  }
}