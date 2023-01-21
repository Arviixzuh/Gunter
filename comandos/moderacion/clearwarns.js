const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const db = require('../../mongo-db/schemaWarn');

module.exports = {
    name: "clear-warns",
    alias: ["cw"],

    async execute(client, message, args) {

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({
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

        db.findOne({ guildid: message.guild.id, user: user.user.id }, async (err, data) => {
            if (err) throw err;
            if (data) {
                await db.findOneAndDelete({ user: user.user.id, guildid: message.guild.id })
                message.channel.send({
                    embed: {
                        color: 3066993,
                        description: `<a:check:907350759782350918> • **¡Todas las advertencias fueron removidas!**`
                    }
                })
            } else {
                message.channel.send({
                    embed: {
                        color: 15158332,
                        description: `<a:alert:907348214036983869> • **¡El usuario ${user.user} no tiene advertencias!**`
                    }
                })
            }
        })


    }
}