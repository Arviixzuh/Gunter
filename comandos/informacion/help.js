const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "help",
  alias: [],

  execute(client, message, args, prefix) {

      if (!message.channel.nsfw) {

        const embed2 = new Discord.MessageEmbed()

          .setColor("692559")
          .setAuthor(`¡Comandos de ${client.user.username}!`, "https://emoji.discord.st/emojis/6495bf49-8134-4b23-bd7a-509130c0d7b3.gif")
          .setDescription(`> ¡Hola! soy **${client.user.username}**, este es un listado de mis comandos.\n> Mi prefix es **\`${prefix}\`** y puedes cambiarlo con ${prefix}setprefix **\`[nuevoPrefix]\`**\n> Entra a mi [servidor de soporte](https://discord.gg/qJ4nQFZYCB) para obtener ayuda.\n\n> **Tienes un nuevo mensaje <a:newmail:910978103793303582>**\n\n » **__Los comandos que posee ${client.user.username}__** «\n`)
          .addField("📋 Comandos de Información", "`userinfo` `serverinfo` `botinfo` `ping`")
          .addField("🔨 Comandos de Moderación", "`ban` `hackban` `kick` `clear` `unban` `mute` `tempmute`\n`unmute` `warn` `warns` `unwarn` `clear-warns` `nuke`")
          .addField("👋 Comandos de Interacción", "`blush` `confused` `cry` `dance` `happy` `hug` `feed`\n`kiss` `lick` `pat` `patear` `slap` `sleep` `suicide`")
          .addField("😄 Comandos de Diversión", "`dick` `8ball` `lindometro` `gaytest` `chiste`\n`poligrafo` `hack` `amor` `erigey`")
          .addField("🎮 Comandos de Juegos", "`dados` `buscaminas` `tictactoe` `mcskin`\n`rps` `ppt` `akinator` `futbol` `mcstatus` `mchead`")
          .addField("📷 Comandos de Imagenes ", "`gay` `hitler` `pixel` `rip` `trigger` `wanted` `servericon`\n`wasted` `beautifull` `ohno` `jail` `mclogro` `soyadmin`")
          .addField("🔞 Comandos NSFW", "» __Solo podrás ver estos comandos en un canal NSFW__")
          .addField("🛠️ Comandos Útililes", "`Avatar` `calc` `invite` `jumbo` `snipe` `say`\n`traductor` `servericon` `sugerencia` `poll`")
          .addField("🎵 Comandos de Musica", "`play` `skip` `pause` `resume` `volume` `leave` `queue` `loop`")
          .addField("⚙️ Comandos de configuración", "`setprefix` `setmuterole` `setsugerencia` `setlogs`")
          .addField("🔗 Enlaces", `[Soporte](https://discord.gg/qJ4nQFZYCB) • [Invitación](https://discord.com/oauth2/authorize?client_id=666685928428797962&scope=bot&permissions=8) • [Top.gg](https://discord.com/oauth2/authorize?client_id=666685928428797962&scope=bot&permissions=8) • [Creador](https://github.com/Arviixzuh)`)
          .setFooter(`Para reportar un fallo ${prefix}bugreport [reporte]`, 'https://emoji.discord.st/emojis/e173fa05-e5b2-42e4-a1a9-9508a451820d.gif')

        message.channel.send(embed2)

      } else {

        const embed = new Discord.MessageEmbed()

          .setColor("692559")
          .setAuthor(`¡Comandos de ${client.user.username}!`, "https://emoji.discord.st/emojis/6495bf49-8134-4b23-bd7a-509130c0d7b3.gif")
          .setDescription(`> ¡Hola! soy **${client.user.username}**, este es un listado de mis comandos.\n> Mi prefix es **\`${prefix}\`** y puedes cambiarlo con ${prefix}setprefix **\`[nuevoPrefix]\`**\n> Entra a mi [servidor de soporte](https://discord.gg/qJ4nQFZYCB) para obtener ayuda.\n\n> **Tienes un nuevo mensaje <a:newmail:910978103793303582>**\n\n » **__Los comandos que posee ${client.user.username}__** «\n`)
          .addField("📋 Comandos de Información", "`userinfo` `serverinfo` `botinfo` `ping`")
          .addField("🔨 Comandos de Moderación", "`ban` `hackban` `kick` `clear` `unban` `mute` `tempmute`\n`unmute` `warn` `warns` `unwarn` `clear-warns` `nuke`")
          .addField("👋 Comandos de Interacción", "`blush` `confused` `cry` `dance` `happy` `hug` `feed`\n`kiss` `lick` `pat` `patear` `slap` `sleep` `suicide`")
          .addField("😄 Comandos de Diversión", "`dick` `8ball` `lindometro` `gaytest` `chiste`\n`poligrafo` `hack` `amor` `erigey`")
          .addField("🎮 Comandos de Juegos", "`dados` `buscaminas` `tictactoe` `mcskin`\n`rps` `ppt` `akinator` `futbol` `mcstatus` `mchead`")
          .addField("📷 Comandos de Imagenes ", "`gay` `hitler` `pixel` `rip` `trigger` `wanted` `servericon`\n`wasted` `beautifull` `ohno` `jail` `mclogro` `soyadmin`")
          .addField("🔞 Comandos NSFW", "`ass` `blowjob` `cum` `glasses` `hentai` `hgif` `masturbation`\n`orgy` `panties` `porn` `pussy` `school` `uniform` `succubus`")
          .addField("🛠️ Comandos Útililes", "`Avatar` `calc` `invite` `jumbo` `snipe` `say`\n`traductor` `servericon` `sugerencia` `poll`")
          .addField("🎵 Comandos de Musica", "`play` `skip` `pause` `resume` `volume` `leave` `queue` `loop`")
          .addField("⚙️ Comandos de configuración", "`setprefix` `setmuterole` `setsugerencia` `setlogs`")
          .addField("🔗 Enlaces", `[Soporte](https://discord.gg/qJ4nQFZYCB) • [Invitación](https://discord.com/oauth2/authorize?client_id=666685928428797962&scope=bot&permissions=8) • [Top.gg](https://discord.com/oauth2/authorize?client_id=666685928428797962&scope=bot&permissions=8) • [Creador](https://github.com/Arviixzuh)`)
          .setFooter(`Para reportar un fallo ${prefix}bugreport [reporte]`, 'https://emoji.discord.st/emojis/e173fa05-e5b2-42e4-a1a9-9508a451820d.gif')

        message.channel.send(embed)

      } 

      }
    }