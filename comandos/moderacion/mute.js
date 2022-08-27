const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');
const muterole = require('../../mongo-db/schemaMutear');

module.exports = {
    name: "mute",
    alias: [],
    async execute (client, message, args) {

  var razon = args.slice(1).join(' ')
  if (!razon) {

  razon = 'No Especificada.'

}

    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **Error** • ¡No tienes permisos para usar este comando!`
    }});
    if (!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **Error** • ¡No tengo permisos para ejecutar este comando!`
    }});

    const data = await muterole.findOne({
      Server: message.guild.id
    })

    if(!data) {
      return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **Error** • ¡El rol **mute** no esta establecido en este servidor!\n Utiliza \`setmuterole @rolmute\` para poder usar este comando.`
    }});
    }

    let rolemute = message.guild.roles.cache.get(data.Role)
    if(!rolemute) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **Error** • ¡El rol **mute** no esta establecido en este servidor!\n Utiliza \`setmuterole @rolmute\` para poder usar este comando.`
    }});


      let persona = message.mentions.members.first()

    if(!persona) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **Error** • ¡Debes mencionar a un usuario!`
    }});


      if(persona.roles.cache.has(data.Role)) {

          message.channel.send({embed: {
          color: 15158332,
          description: `<a:alert:907348214036983869> **Error** • ¡Ese usuario ya está muteado!`
        }});
    
      } else {

        persona.roles.add(rolemute).then(async (m) => {

          const embed = new Discord.MessageEmbed() 
      
          .setColor("ORANGE")
          .setDescription(`**¡El usuario **${persona}** fue muteado correctamente!**\n\n📋 **Razón:** ${razon}\n🔨 **Moderador:** ${message.author.username}\n\n[[unmute]](https://unmute)`)
          
          message.channel.send(embed);
      
          const embed2 = new Discord.MessageEmbed() 
      
          }).catch(err => {
          console.log(err)
          let embed_error = new Discord.MessageEmbed(); 
          embed_error.setColor("RED");
          embed_error.setDescription(`<a:alert:907348214036983869> **Error** • ¡No puedo hacer eso porque mi rol está muy bajo en la jerarquía!`);
          if(err) return message.channel.send(embed_error);
          })

      }

}}