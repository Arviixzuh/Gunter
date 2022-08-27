const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');
const db = require('../../mongo-db/schemaWarn');

module.exports = {
    name: "warn",
    alias: [""], 

    execute (client, message, args) {

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed: {
            color: 15158332,
            description: `<a:alert:907348214036983869> **Error** • ¡No tienes permisos para usar este comando!`
          }});

          const user = message.mentions.members.first(); //|| message.guild.members.cache.get(args[0]);
          if(!user) return message.channel.send({embed: {
          color: 15158332,
          description: `<a:alert:907348214036983869> **Error** • ¡Debes mencionar a un usuario!`
        }});

        const aplicacion = message.mentions.users.first(); //|| message.guild.members.cache.get(args[0])
        if(aplicacion.bot) return message.channel.send({embed: {
            color: 15158332,
            description: `<a:alert:907348214036983869> **${message.author.username}** • ¡No puedes advertir a un bot!`
        }});

        var reason = args.slice(1).join(" ")
        if(!reason) {
            reason = 'No Especificada.'
        }

        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
            if(err) throw err;
            if(!data) {
                data = new db({
                    guildid: message.guild.id,
                    user: user.user.id,
                    content : [
                        {
                            moderator : message.author.id,
                            reason : reason
                        }
                    ]
                })
            } else {
                const obj ={
                    moderator: message.author.id,
                    reason: reason
                }
                data.content.push(obj)
            }
            data.save()
        });

        message.channel.send(new MessageEmbed()
        .setDescription(`**¡El usuario **${user}** fue advertido correctamente!**\n\n📋 **Razón:** ${reason}\n🔨 **Moderador:** ${message.author.username}\n\n[[unwarn]](https://discord.com/oauth2/authorize?client_id=908862622672236635&scope=bot&permissions=8)`)
        .setColor("ORANGE")
        )

    }
}