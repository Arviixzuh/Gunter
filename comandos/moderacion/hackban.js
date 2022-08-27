const Discord = require('discord.js');
const client = new Discord.Client();
const {Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "hackban",
    alias: [""], 

    async execute (client, message, args) {

var razon = args.slice(1).join(' ')
if (!razon) {

  razon = 'No Especificada.'

}

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **Error** • ¡No tienes permisos para usar este comando!`
    }});

      const id = args[0];
        if(!id) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **Error** • ¡Debes colocar una ID!`
    }});;
  
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **Error** • ¡No tengo permisos para ejecutar este comando!`
    }});

            try {
              message.guild.members.ban(id, {razon: razon.length < 1 ? 'No Especificada.': razon});
                
            const embed = new MessageEmbed()

                .setTitle(`¡HackBan Exitoso!`)
                .addField(`Usuario:`, `<@${id}>`)
                .addField("Razón:", `${razon}`)
                .addField("Moderador:", `${message.author.username}`)
                .setFooter("Sistema de Moderación", message.author.avatarURL())
                .setColor("RED")

                message.channel.send(embed)
            
            } catch (error) { console.log(error)}

    }
}