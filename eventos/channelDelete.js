const Discord = require('discord.js');
const logs = require('../mongo-db/schemaLogs');
const { findOne } = require('../mongo-db/schemaLogs');

module.exports = async (client, channelDelete) => {

  const data = await logs.findOne({
    Server: channelDelete.guild.id
  })
  if (!data) {
    return;
  }

  const embed = new Discord.MessageEmbed()

    .setTitle("<:scroller:919350659231412244> \`|\` Registro de Auditoria")
    .setDescription(`🗑 **__Canal Borrado__**\n\n・**Canal:** ${channelDelete.name}\n・**Tipo:** ${channelDelete.type}\n・**Categoria:** ${channelDelete.parent}`)
    .setColor("835aa2")

  try {
    let canal = client.channels.cache.get(data.Canal)
    if (!canal) return;
    await canal.send(embed)
  } catch (error) {
    return;
  }

}