const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');
const muterole = require('../../mongo-db/schemaMutear');

module.exports = {
    name: "unmute",
    alias: [],
    async execute (client, message, args) {

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


      if(!persona.roles.cache.has(data.Role)) {

          message.channel.send({embed: {
          color: 15158332,
          description: `<a:alert:907348214036983869> **Error** • ¡Ese usuario no está muteado!`
        }});
    
      } else {

        persona.roles.remove(rolemute).then(async (m) => {

          const embed = new Discord.MessageEmbed() 
      
          .setColor("GREEN")
          .setDescription(`<a:check:907350759782350918> • **¡El usuario **${persona}** fue desmuteado correctamente!**`)
          
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