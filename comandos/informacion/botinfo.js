const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const moment = require('moment');
require('moment-duration-format');

module.exports = {
  name: "botinfo",
  alias: [""],

  execute(client, message, args) {

    const { version } = require("discord.js");

    const actividad = moment.duration(message.client.uptime).format(' D [d], H [h], m [m], s [s]');

    let ping = Math.floor(message.client.ping);

    const embed = new Discord.MessageEmbed()

      .setDescription(`<a:check:907350759782350918> **Informacion sobre ${message.client.user.username}**`)
      .addField("<:owner:912802823362715739> Creador:", `┕\`Arviixzuh_#0217\``, true)
      .addField("👥 Usuarios", `┕\`${message.client.users.cache.size}\``, true)
      .addField("🏘️ Servidores", `┕\`${message.client.guilds.cache.size}\``, true)

      .addField("🏓 ping", `┕\`${message.client.ws.ping}ms\``, true)
      .addField("🗄️ Memoria", `┕\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb\``, true)
      .addField("🎛️ Latencia", `┕\`${Math.floor(message.createdTimestamp - Date.now())}ms\``, true)

      .addField("🕐 Encendido", `┕\`${actividad}\``, true)
      .addField("<:discord:913295140414685215> Discord.js", `┕\`${version}\``, true)
      .addField("<:nodejs:911471408956198912> Node", `┕\`${process.version}\``, true)
      .setColor("835aa2")

    message.channel.send(embed)


  }
}