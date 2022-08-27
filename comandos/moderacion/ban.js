const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "ban",
    alias: [], 

    async execute (client, message, args) {

var razon = args.slice(1).join(' ')
if (!razon) {

  razon = 'No Especificada.'

}
    
var perms = message.member.hasPermission("BAN_MEMBERS");
    if (!perms) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **Error** • ¡No tienes permisos para usar este comando!`
    }});
    
    if (message.mentions.users.size < 1) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Debes mencionar a un usuario!`
    }});

      let persona = message.mentions.members.first()
      let avatar = persona.user.displayAvatarURL({
      dynamic: true,
      format: "png",
      size: 1024
    });

    if(persona === message.author) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **Error** • ¡No puedes banearte a ti mismo!`
    }});
  
    if (!message.guild.member(persona).bannable) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • ¡No puedes banear a un moderador!`
    }});
      
message.guild.members.ban(persona); 

    const embed = new Discord.MessageEmbed() 
   
    .setTitle(`¡Beneo Exitoso!`)
    .setThumbnail(avatar)
    .addField("Usuario:", `${persona}`)
    .addField("ID:", `${persona.id}`)
    .addField("Razón:", `${razon}`)
    .addField("Moderador:", `${message.author.username}`)
    .setFooter("Sistema de Moderación", message.author.avatarURL())
    .setColor("RED")
    
    message.channel.send(embed)	

    }
}