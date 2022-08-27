 const Discord = require("discord.js");
  module.exports = {
      name: "unban",
      alias: [],
      async execute (client, message, args) {
  
          if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **Error** • ¡No tienes permisos para usar este comando!`
    }});
  
          if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **Error** • ¡No tengo permisos para ejecutar este comando!`
    }});
  
          let userID = args[0]
          if(!userID) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **Error** • ¡Debes escibir una ID valida.`
    }});
  
  message.guild.fetchBans().then(bans=> { 
      if(bans.size == 0) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **Error** • ¡No hay ningun ban registrado en este servidor!`
    }});
  let unbanuser = bans.find(b => b.user.id == userID)
  if(!unbanuser) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **Error** • ¡No existe el usuario mencionado!`
    }});
  message.guild.members.unban(unbanuser.user)
  const embedunban = new Discord.MessageEmbed()
          .setTitle(`¡Desbaneo Exitso!`)
          .addField(`Usuario:`, `<@${userID}>`)
          .addField(`Moderador:`, `${message.author.username}`)
          .setFooter("Sistema de Moderación", message.author.avatarURL())
          .setColor("RED")
          message.channel.send(embedunban);
              }
          
      
  )}
  }