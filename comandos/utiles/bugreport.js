const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');


module.exports = {
    name: "bugreport",
    alias: ["report"], 

    async execute (client, message, args) {

     let avatar = message.author.displayAvatarURL({
      dynamic: true,
      format: "png",
      size: 1024
    });

      const report = args.join(' ')
      const user = message.author;

      if(!report){
        const embed = new Discord.MessageEmbed() 
      .setDescription(`<a:alert:907348214036983869> • ¡Debes escribir tu reporte!`)
      .setColor("RED")
      message.channel.send(embed)
        
      } else {
        
      const embed2 = new Discord.MessageEmbed()
      .setTitle("📥 Nuevo reporte")
      .setThumbnail(avatar)
      .setDescription(`**Autor:** ${user.tag}\n**ID:** ${user.id}\n**Reporte:**\n${report}`)
      .setColor("835aa2")
      .setTimestamp()

      const embed3 = new Discord.MessageEmbed() 
      .setDescription(`<a:check:907350759782350918> • **¡Reporte enviado correctamente!**`)
      .setColor("GREEN")
      message.channel.send(embed3)

      client.channels.cache.get('995188686587183194').send(embed2)

        
      }

    }
}