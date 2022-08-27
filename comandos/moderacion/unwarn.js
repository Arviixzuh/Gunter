const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');
const db = require('../../mongo-db/schemaWarn');

module.exports = {
    name: "unwarn",
    alias: [""], 

    async execute (client, message, args) {

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed: {
            color: 15158332,
            description: `<a:alert:907348214036983869> **Error** • ¡No tienes permisos para usar este comando!`
          }});

          const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
          if(!user) return message.channel.send({embed: {
          color: 15158332,
          description: `<a:alert:907348214036983869> **Error** • ¡Debes mencionar a un usuario o colocar su ID!`
        }});

        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
            if(err) throw err;
            if(data) {
                let number = parseInt(args[1]) - 1
                data.content.splice(number, 1)
                message.channel.send({embed: {
                    color: 3066993,
                    description: `<a:check:907350759782350918> • **¡Advertencia removida correctamente!**`
                }})
                data.save()
            } else {
                    message.channel.send({embed: {
                    color: 15158332,
                    description: `<a:alert:907348214036983869> • **¡El usuario ${user.user} no tiene advertencias!**`
                }})
            }
        })


    }
}