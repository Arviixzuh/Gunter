const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "avatar",
    alias: [], 

    execute (client, message, args) {

      const member = message.mentions.members.first() || message.member;

      let avatar = member.user.displayAvatarURL({
      dynamic: true,
      format: "png",
      size: 1024
    });

        let embed = new Discord.MessageEmbed()

        .setTitle(`Avatar de ${member.user.username}`)
        .setDescription(`📥 • **Descargar** [» Click aquí «](${member.user.displayAvatarURL()})`)
        .setImage(avatar)
        .setColor("835aa2")

        message.channel.send(embed)


    }
}
