const Discord = require('discord.js');
const logs = require('../mongo-db/schemaLogs');
const { findOne } = require('../mongo-db/schemaLogs');

module.exports = async (client, channelCreate) => {
  if (channelCreate.type === 'dm') return;

  const data = await logs.findOne({
    Server: channelCreate.guild.id
  })
  if (!data) {
    return;
  }

  const embed = new Discord.MessageEmbed()

    .setTitle("<:scroller:919350659231412244> \`|\` Registro de Auditoria")
    .setDescription(`📥 **__Nuevo Canal__**\n\n・**Canal:** <#${channelCreate.id}>\n・**Tipo:** ${channelCreate.type}\n・**Categoria:** ${channelCreate.parent}`)
    .setColor("835aa2")

  try {
    let canal = client.channels.cache.get(data.Canal)
    if (!canal) return;
    await canal.send(embed)
  } catch (error) {
    return;
  }

}