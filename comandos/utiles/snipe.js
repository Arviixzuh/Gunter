const Discord = require('discord.js');
const client = new Discord.Client();
const {Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "snipe",
    alias: [""], 

    execute (client, message, args) {

      const channel = message.mentions.channels.first() || message.channel;

      const msg = client.snipes.get(channel.id)

      if(!msg){
      message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **Error** • ¡No hay mensajes borrados!`
    }});
      } else {
        const embed = new Discord.MessageEmbed()

        .setThumbnail(msg.delete.displayAvatarURL())
        .setDescription(`**Mensaje borrado de** ${msg.delete}\n\n**Mensaje:** ${msg.content}\n**Canal:** <#${msg.canal.id}>`)
        .setColor("RED")

        message.channel.send(embed)
      }

    }
}