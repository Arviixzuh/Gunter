const Discord = require('discord.js');
const logs = require('../mongo-db/schemaLogs');
const { findOne } = require('../mongo-db/schemaLogs');

module.exports = async (client, roleCreate) => {

  const data = await logs.findOne({
    Server: roleCreate.guild.id
  })
  if(!data) {
    return;
  }

  const embed = new Discord.MessageEmbed()

  .setTitle("<:scroller:919350659231412244> \`|\` Registro de Auditoria")
  .setDescription(`⚔️ **__Nuevo Rol__**\n\n・**Rol:** <@&${roleCreate.id}>\n・**ID:** ${roleCreate.id}\n`)
  .setColor("835aa2")

  let canal = client.channels.cache.get(data.Canal)
  if(!canal) return;
  canal.send(embed)

}