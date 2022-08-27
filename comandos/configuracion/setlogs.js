const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');
const logs = require('../../mongo-db/schemaLogs');

module.exports = {
    name: "setlogs",
    alias: [""], 

   async execute (client, message, args) {

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **Error** • ¡No tienes permisos para usar este comando!`
    }});

    const canallog = message.mentions.channels.first();
    if(!canallog)return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **Error** • ¡Debes mencionar un canal!`
    }});

              const data = await logs.findOne({
                Server: message.guild.id
              })
              if(!data) {
                const data = new logs({
                  Server: message.guild.id,
                  Canal: canallog.id
                })
                data.save()
                message.channel.send({embed: {
                  color: 3066993,
                  description: `<a:check:907350759782350918> • **¡El canal ${canallog} fue establecido correctamente!**`
                }});
              } else {
                await logs.findOneAndUpdate({
                Server: message.guild.id,
                Canal: canallog.id
                })
                data.save()
                message.channel.send({embed: {
                  color: 3066993,
                  description: `<a:check:907350759782350918> • **¡El canal ${canallog} fue establecido correctamente!**`
                }});
          
              }

    }
}