const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "userinfo",
  alias: [],

  execute(client, message, args) {

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

    const member = message.mentions.members.first() || message.member;

    let avatar = member.user.displayAvatarURL({
      dynamic: true,
      format: "png",
      size: 1024
    });

    const embed = new Discord.MessageEmbed()

      .setThumbnail(avatar)
      .setAuthor(member.user.username, member.user.displayAvatarURL())
      .setColor("835aa2")
      .setDescription(`<:scroller:919350659231412244> **\`|\`** __**Información**__\n\n👤 ・**Usuario:** ${member.user.tag}\n✏️ ・**Apodo:** ${member.nickname !== null ? `${member.nickname}` : 'Ninguno'}\n📌 ・**Mención:** ${member.user}\n🎟️ ・**ID:** ${member.user.id}\n<:HypeSquad_Events:919387685339148368> ・**Insignias:** ${member.user.flags.toArray().length ? `${member.user.flags.toArray().map(badge => badges1[badge]).join(' ')}` : "Ninguna"}\n\n<a:boost:909509580944441435> ・**Nitro:** ${member.premiumSince ? 'Si' : 'No'}\n🎮 ・**Actividad:** ${member.user.presence.game != null ? member.user.presence.game.name : "Ninguna"}\n<a:boost:919396289224015883> ・**Boost:** ${member.premiumSince ? '**Si**' : 'No'}\n\n📥 ・**Avatar:** [Click aquí](${avatar})\n🗓️ ・**Fecha de ingreso:** ${formatDate('DD/MM/YYYY', member.joinedAt)}\n🛎️ ・**Fecha de creación:** ${formatDate('DD/MM/YYYY', member.user.createdAt)}\n🎖️ ・**Roles:** ${member.roles.cache.map(roles => `\`${roles.name}\``).join(' ')}`)
      .setFooter(`Solicitado por ${message.author.username}`)
      .setTimestamp()

    message.channel.send(embed)


  }
}

