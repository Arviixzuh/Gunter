const Discord = require('discord.js');
const logs = require('../mongo-db/schemaLogs');
const { findOne } = require('../mongo-db/schemaLogs');

module.exports = async (client, guildMemberRemove) => {

  const data = await logs.findOne({
    Server: guildMemberRemove.guild.id
  })
  if (!data) {
    return;
  }
  let avatar = guildMemberRemove.user.displayAvatarURL({
    dynamic: true,
    format: "png",
    size: 1024
  });

  const embed = new Discord.MessageEmbed()

    .setTitle("<:scroller:919350659231412244> \`|\` Registro de Auditoria")
    .setDescription(`📥 **__Alguien se acaba de Salir__**\n\n・**Usuario:** ${guildMemberRemove.user}\n・**ID:** ${guildMemberRemove.id}`)
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