const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "serverinfo",
  alias: [""],

  async execute(client, message, args, prefix) {

    let icon = message.guild.iconURL({
      dynamic: true,
      format: "png",
      size: 1024
    });

    const embed = new Discord.MessageEmbed()

      .setAuthor(message.guild.name, message.guild.iconURL())
      .setThumbnail(icon)
      .setColor("835aa2")
      .setDescription(`<:scroller:919350659231412244> **\`|\`** __**Información**__\n\n🏠 ・**Nombre:** ${message.guild.name}\n<:owner:912802823362715739> ・**Propietario:** ${message.guild.owner.user.tag}\n<:alto:907368255381971075> ・**Nivel de verificación:** ${message.guild.verificationLevel}\n🗓️ ・**Creacion:** ${message.guild.createdAt.toDateString().split(" ")[2]}/${message.guild.createdAt.toDateString().split(" ")[1]}/${message.guild.createdAt.toDateString().split(" ")[3]}\n🎟️ ・**ID:** ${message.guild.id}\n<:boost:907356525981474847> ・**Mejoras:** ${message.guild.premiumSubscriptionCount.toString()}\n<a:boost:909509580944441435> ・**Nivel:** ${message.guild.premiumTier.toString()}\n\n<:scroller:919350659231412244> **\`|\`** __**Estadísticas**__\n\n✏️ ・**Canales de texto:** ${message.guild.channels.cache.filter(m => m.type === 'text').size}\n🔉 ・**Canales de voz:** ${message.guild.channels.cache.filter(m => m.type === 'voice').size}\n👥 ・**Miembros:** ${message.guild.members.cache.filter(m => m.presence.status !== 'offline').size}/${message.guild.memberCount}\n🤖 ・**Bots:** ${message.guild.members.cache.filter(m => m.user.bot).size}\n🎭 ・**Emojis:** ${message.guild.emojis.cache.size}\n🎖️ ・**Roles:** ${message.guild.roles.cache.size}\n📥 ・**Icono:** [Click aquí](${icon})`)
      .setFooter(`Solicitado por ${message.author.username}`)
      .setTimestamp()

    message.channel.send(embed)

  }
}