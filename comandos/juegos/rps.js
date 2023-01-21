const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "rps",
  alias: [""],

  execute(client, message, args) {

    if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tengo permisos para ejecutar este comando!`
      }
    });

    let volver = '🚫'
    let reglasgg = '📘'

    var piedra = ["🧻 tú **Pierdes**! 😢", "🖖 tú **Pierdes**! 😢", "✂️ tú **Ganas**! 😄", "🦎 tú **Ganas**! 😄", "🪨 es un **Empate**! 😐"];
    var papel = ["✂️ tú **Pierdes**! 😢", "🦎 tú **Pierdes**! 😢", "🖖 tú **Ganas**! 😄", "🪨 tú **Ganas**! 😄", "🧻 es un **Empate**! 😐"];
    var tijera = ["🪨 tú **Pierdes**! 😢", "🖖 tú **Pierdes**! 😢", "🦎 tú **Ganas**! 😄", "🧻 tú **Ganas**! 😄", "✂️ es un **Empate**! 😐"];
    var lagarto = ["✂️ tú **Pierdes**! 😢", "🪨 tú **Pierdes**! 😢", "🧻 tú **Ganas**! 😄", "🖖 tú **Ganas**! 😄", "🦎 es un **Empate**! 😐"];
    var spock = ["🦎 tú **Pierdes**! 😢", "🧻 tú **Pierdes**! 😢", "✂️ tú **Ganas**! 😄", "🪨 tú **Ganas**! 😄", "🖖 es un **Empate**! 😐"];

    const cargando = new Discord.MessageEmbed()

      .setDescription("<a:loading:908139972161323079> • **Espera mientras cargan las reacciones...**")
      .setColor("835aa2")

    const reglas = new Discord.MessageEmbed()
      .setDescription(`__**Reglas**__ 📜\n\n・Tijera corta a papel.\n・Papel envuelve a piedra.\n・Piedra aplasta a lagarto.\n・Lagarto envenena a Spock.\n・Spock rompe a tijera.\n・Tijera decapita a lagarto.\n・Lagarto devora a papel.\n・Papel desautoriza a Spock.\n・Spock vaporiza a piedra.\n・Piedra aplasta a tijera.\n\nCerrar menu de reglas « 🚫 »`)
      .setColor("835aa2")

    const embed = new Discord.MessageEmbed()
      .setDescription(`__**¡Selecciona una Opción!**__\n\n\`Piedra\` • \`Papel\` • \`Tijera\` • \`Lagarto\` • \`Spock\`\n\nClick en el « 📘 » para ver las reglas.`)
      .setColor("835aa2")
    message.channel.send(cargando).then(async (msg) => {

      await msg.react('🪨')
      await msg.react('🧻')
      await msg.react('✂️')
      await msg.react('🦎')
      await msg.react('🖖')
      await msg.react('📘')
      await msg.edit(embed)

      msg.awaitReactions((reaction, user) => {

        if (message.author.id !== user.id) return;

        if (reaction.emoji.name === '🪨') {
          msg.edit(embed.setDescription(`¡He Elegido ${(piedra[Math.floor(Math.random() * piedra.length)])}\n\n__**Tu opción:**__ 🪨`)) && msg.reactions.removeAll().catch(error => { return; });
        }

        if (reaction.emoji.name === '🧻') {
          msg.edit(embed.setDescription(`¡He Elegido ${(papel[Math.floor(Math.random() * papel.length)])}\n\n__**Tu opción:**__ 🧻`)) && msg.reactions.removeAll().catch(error => { return; });
        }

        if (reaction.emoji.name === '✂️') {
          msg.edit(embed.setDescription(`¡He Elegido ${(tijera[Math.floor(Math.random() * tijera.length)])}\n\n__**Tu opción:**__ ✂️`)) && msg.reactions.removeAll().catch(error => { return; });
        }

        if (reaction.emoji.name === '🦎') {
          msg.edit(embed.setDescription(`¡He Elegido ${(lagarto[Math.floor(Math.random() * lagarto.length)])}\n\n__**Tu opción:**__ 🦎`)) && msg.reactions.removeAll().catch(error => { return; });
        }

        if (reaction.emoji.name === '🖖') {
          msg.edit(embed.setDescription(`¡He Elegido ${(spock[Math.floor(Math.random() * spock.length)])}\n\n__**Tu opción:**__ 🖖`)) && msg.reactions.removeAll().catch(error => { return; });
        }

        if (reaction.emoji.name === '📘') {
          msg.react(volver) && msg.edit(reglas) && msg.reactions.cache.get(reglasgg).remove().catch(error => { return; });
        }

        if (reaction.emoji.name === '🚫') {
          msg.edit(embed) && msg.react(reglasgg) && msg.reactions.cache.get(volver).remove().catch(error => { return; });
        }

      })
    })

  }
}