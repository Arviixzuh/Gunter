const Discord = require('discord.js');
const logs = require('../mongo-db/schemaLogs');
const { findOne } = require('../mongo-db/schemaLogs');

module.exports = async (client, message) => {
  if (message.channel.type === 'dm') return;
  if (message.author.bot) return;

  const data = await logs.findOne({
    Server: message.guild.id
  })
  if (!data) {
    return;
  }

  let avatar = message.author.displayAvatarURL({
    dynamic: true,
    format: "png",
    size: 1024
  });

  const embed = new Discord.MessageEmbed()

    .setTitle("<:scroller:919350659231412244> \`|\` Registro de Auditoria")
    .setDescription(`🗑 **__Mensaje Eliminado__**\n\n・**Autor:** ${message.author.tag}\n・**Canal:** <#${message.channel.id}>\n・**Mensaje:** ${message.content}`)
    .setThumbnail(avatar)
    .setColor("835aa2")

  try {
    let canal = client.channels.cache.get(data.Canal)
    if (!canal) return;
    await canal.send(embed)
  } catch (error) {
    return;
  }

}