const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const db = require('../../mongo-db/schemaWarn');

module.exports = {
    name: "warns",
    alias: [""],

    async execute(client, message, args) {

        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send({
            embed: {
                color: 15158332,
                description: `<a:alert:907348214036983869> **Error** • ¡No tienes permisos para usar este comando!`
            }
        });

        if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send({
            embed: {
                color: 15158332,
                description: `<a:alert:907348214036983869> **Error** • ¡No tengo permisos para ejecutar este comando!`
            }
        });

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!user) return message.channel.send({
            embed: {
                color: 15158332,
                description: `<a:alert:907348214036983869> **Error** • ¡Debes mencionar a un usuario o colocar su ID!`
            }
        });

        const aplicacion = message.mentions.users.first();
        if (aplicacion.bot) return message.channel.send({
            embed: {
                color: 15158332,
                description: `<a:alert:907348214036983869> **Error** • ¡No puedes mencionar a un bot!`
            }
        });

        const reason = args.slice(1).join(" ")

        const data = await db.findOne({
            guildid: message.guild.id,
            user: user.user.id
        })

        if (data) {
            const embed = new Discord.MessageEmbed()
                .setTitle(`Advertencias de ${user.user.username}`)
                .setDescription(data.content.map((w, i) => `\`${i + 1}\` | Moderador: ${message.guild.members.cache.get(w.moderator)}\nRazón: ${w.reason}`))
                .setColor("835aa2")
            message.channel.send(embed)

        } else {
            message.channel.send({
                embed: {
                    color: 15158332,
                    description: `<a:alert:907348214036983869> • **¡El usuario ${user.user} no tiene advertencias!**`
                }
            })
        }

    }
}