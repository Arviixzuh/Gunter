const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "help",
  alias: ["ayuda"],

  execute(client, message, args, prefix) {

    if (!message.channel.nsfw) {

      const ayuda = new Discord.MessageEmbed()

        .setColor("835aa2")
        .setAuthor(`Lista de comandos disponibles`, "https://emoji.discord.st/emojis/6495bf49-8134-4b23-bd7a-509130c0d7b3.gif")
        .setTitle(`__Bienvenido a mi lista de comandos__`)
        .addField("📋 Comandos de Información", "`userinfo` `serverinfo` `botinfo` `ping` `uptime`")
        .addField("🔨 Comandos de Moderación", "`ban` `hackban` `kick` `clear` `unban` `mute` `tempmute`\n`unmute` `warn` `warns` `unwarn` `clear-warns` `nuke`")
        .addField("👋 Comandos de Interacción", "`blush` `confused` `dance` `happy` `hug` `feed`\n`kiss` `lick` `pat` `patear` `slap` `sleep` `cry`")
        .addField("😄 Comandos de Diversión", "`dick` `8ball` `lindometro` `gaytest` `chiste`\n`poligrafo` `hack` `amor` `erigey` `cookie`")
        .addField("🎮 Comandos de Juegos", "`dados` `buscaminas` `tictactoe` `mcskin`\n`akinator` `futbol` `mcstatus` `rps` `ppt`")
        .addField("📷 Comandos de Imagenes ", "`gay` `pixel` `rip` `trigger` `wanted` `servericon`\n`wasted` `beautifull` `jail` `mclogro` `mchead`")
        .addField("🔞 Comandos NSFW", "__Solo podrás ver estos comandos en un canal NSFW__")
        .addField("🛠️ Comandos Útililes", "`Avatar` `calc` `invite` `jumbo` `snipe` `say`\n`traductor` `servericon` `sugerencia` `poll`")
        .addField("🎵 Comandos de Musica", "`play` `skip` `pause` `resume` `autoplay` `volume` `leave`\n`queue` `loop`")
        .addField("⚙️ Comandos de configuración", "`setprefix` `setmuterole` `setsugerencia` `setlogs`")
        .addField("🔗 Enlaces", `[Soporte](https://discord.gg/qJ4nQFZYCB) • [Invitación](https://discord.com/oauth2/authorize?client_id=666685928428797962&scope=bot&permissions=8) • [Top.gg](https://discord.com/oauth2/authorize?client_id=666685928428797962&scope=bot&permissions=8) • [Creador](https://github.com/Arviixzuh)`)
        .setFooter(`Para reportar un fallo ${prefix}bugreport [reporte]`, 'https://emoji.discord.st/emojis/e173fa05-e5b2-42e4-a1a9-9508a451820d.gif')

      message.channel.send(ayuda)

    } else {

      const ayuda2 = new Discord.MessageEmbed()

        .setColor("835aa2")
        .setAuthor(`Lista de comandos disponibles`, "https://emoji.discord.st/emojis/6495bf49-8134-4b23-bd7a-509130c0d7b3.gif")
        .setTitle(`__Bienvenido a mi lista de comandos__`)
        .addField("📋 Comandos de Información", "`userinfo` `serverinfo` `botinfo` `ping` `uptime`")
        .addField("🔨 Comandos de Moderación", "`ban` `hackban` `kick` `clear` `unban` `mute` `tempmute`\n`unmute` `warn` `warns` `unwarn` `clear-warns` `nuke`")
        .addField("👋 Comandos de Interacción", "`blush` `confused` `dance` `happy` `hug` `feed`\n`kiss` `lick` `pat` `patear` `slap` `sleep` `cry`")
        .addField("😄 Comandos de Diversión", "`dick` `8ball` `lindometro` `gaytest` `chiste`\n`poligrafo` `hack` `amor` `erigey` `cookie`")
        .addField("🎮 Comandos de Juegos", "`dados` `buscaminas` `tictactoe` `mcskin`\n`akinator` `futbol` `mcstatus` `rps` `ppt`")
        .addField("📷 Comandos de Imagenes ", "`gay` `pixel` `rip` `trigger` `wanted` `servericon`\n`wasted` `beautifull` `jail` `mclogro` `mchead`")
        .addField("🔞 Comandos NSFW", "`ass` `blowjob` `cum` `glasses` `hentai` `hgif` `masturbation`\n`orgy` `panties` `porn` `pussy` `school` `uniform` `succubus`")
        .addField("🛠️ Comandos Útililes", "`Avatar` `calc` `invite` `jumbo` `snipe` `say`\n`traductor` `servericon` `sugerencia` `poll`")
        .addField("🎵 Comandos de Musica", "`play` `skip` `pause` `resume` `autoplay` `volume` `leave`\n`queue` `loop`")
        .addField("⚙️ Comandos de configuración", "`setprefix` `setmuterole` `setsugerencia` `setlogs`")
        .addField("🔗 Enlaces", `[Soporte](https://discord.gg/qJ4nQFZYCB) • [Invitación](https://discord.com/oauth2/authorize?client_id=666685928428797962&scope=bot&permissions=8) • [Top.gg](https://discord.com/oauth2/authorize?client_id=666685928428797962&scope=bot&permissions=8) • [Creador](https://github.com/Arviixzuh)`)
        .setFooter(`Para reportar un fallo ${prefix}bugreport [reporte]`, 'https://emoji.discord.st/emojis/e173fa05-e5b2-42e4-a1a9-9508a451820d.gif')
      message.channel.send(ayuda2)

    }

  }
}