const Discord = require('discord.js');
const logs = require('../mongo-db/schemaLogs');
const { findOne } = require('../mongo-db/schemaLogs');

module.exports = async (client, guildMemberAdd) => {

  const data = await logs.findOne({
    Server: guildMemberAdd.guild.id
  })
  if (!data) {
    return;
  }

  function formatDate(template, date) {
    var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
    return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
      return template.split(specs[i]).join(item)
    }, template)
  }

  let badges1 = {

    'EARLY_SUPPORTER': '<:EarlySupporter:919385920216662046>',
    'DISCORD_EMPLOYEE': '<:DiscordStaff:919390264609632297>',
    'DISCORD_PARTNER': '<:DiscordPartner:919387095578075146>',
    'HYPESQUAD_EVENTS': '<:HypeSquad_Events:919387685339148368>',
    'HOUSE_BRAVERY': '<:BraveryLogo:919383431480246412>',
    'HOUSE_BRILLIANCE': '<:BrillianceLogo:919384042099580968>',
    'BUGHUNTER_LEVEL_1': '<:BugHunter:919388652776341514>',
    'BUGHUNTER_LEVEL_2': '<:BugHunter_Gold:919388688486633502>',
    'VERIFIED_DEVELOPER': '<:VerifiedDeveloper:919388905525108756>',
    'HOUSE_BALANCE': '<:BalanceLogo:919384030976294923>',
    'VERIFIED_BOT': '<:VerifiedBot:919392501679423579>',
  }

  let avatar = guildMemberAdd.user.displayAvatarURL({
    dynamic: true,
    format: "png",
    size: 1024
  });

  const embed = new Discord.MessageEmbed()

    .setTitle("<:scroller:919350659231412244> \`|\` Registro de Auditoria")
    .setDescription(`📥 **__Alguien acaba de Entrar__**\n\n・**Usuario:** ${guildMemberAdd.user}\n・**ID:** ${guildMemberAdd.id}\n・**Fecha de creación:** ${formatDate('DD/MM/YYYY', guildMemberAdd.user.createdAt)}\n・**Insignias:** ${guildMemberAdd.user.flags.toArray().length ? `${guildMemberAdd.user.flags.toArray().map(badge => badges1[badge]).join(' ')}` : "Ninguna"}`)
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