const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const cooldown = new Set();

module.exports = {
  name: "fubol",
  alias: ["futbol"],

  async execute(client, message, args) {

    if (cooldown.has(message.author.id))

      return message.channel.send({
        embed: {
          color: 15158332,
          description: `<a:time:918292719598710834> **${message.author.username}** • ¡Debes esperar **5 segundos** antes de volver a usar este comando!`
        }
      }).then(m => m.delete({ timeout: 5000 }));

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, 5000);

    if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tengo permisos para ejecutar este comando!`
      }
    });

    var izquierda = [`__**¡Lo siento, Perdiste!**__ 😢\n\nㅤㅤ🥅🥅🥅\nㅤㅤ🏃\nㅤㅤ⚽`, `__**¡Felicidades, Ganaste!**__ 🏆\n\nㅤㅤ🥅🥅🥅\nㅤㅤ⚽🏃\n\n`];
    var centro = [`__**¡Lo siento, Perdiste!**__ 😢\n\nㅤㅤ🥅🥅🥅\nㅤㅤㅤㅤ🏃\nㅤㅤㅤㅤ⚽`, `__**¡Felicidades, Ganaste!**__ 🏆\n\nㅤㅤ🥅🥅🥅\nㅤㅤㅤ⚽🏃`];
    var derecha = [`__**¡Lo siento, Perdiste!**__ 😢\n\nㅤㅤ🥅🥅🥅\nㅤㅤㅤㅤㅤ🏃\nㅤㅤㅤㅤㅤ⚽`, `__**¡Felicidades, Ganaste!**__ 🏆\n\nㅤㅤ🥅🥅🥅\nㅤㅤ🏃ㅤ⚽`];

    const fin = new Discord.MessageEmbed()
      .setDescription(`__**¡Tiempo limite alcanzado!**__\n\nㅤㅤ🥅🥅🥅\nㅤㅤㅤ🛌ㅤ⚽`)
      .setColor("835aa2")
      .setFooter(`¡El partido ha finalizado!`)

    const fubol = new Discord.MessageEmbed()
      .setDescription(`__**¡Tienes 30 Segundos!**__ ⌛\n\nㅤㅤ🥅🥅🥅\nㅤㅤㅤ🏋️\n\nㅤㅤㅤ⚽`)
      .setColor("835aa2")
      .setFooter(`🔹 ${message.author.username} vs Gunter 🔸`)

    message.channel.send(fubol).then(msg => {

      msg.react('915771032583954492')//izquierda
      msg.react('915771061394636871')//centro
      msg.react('915771002514989167')//derecha

      const filter = (reaction, user) => {
        return ['915771032583954492', '915771061394636871', '915771002514989167'].includes(reaction.emoji.id) && user.id == message.author.id;
      };

      msg.awaitReactions(filter, { max: 1, time: 30000 })
        .then(collection => {

          const reaction = collection.first();

          if (!reaction) return msg.edit(fin) && msg.reactions.removeAll();

          if (reaction.emoji.id === '915771032583954492') {
            msg.edit(fubol.setDescription(`${(izquierda[Math.floor(Math.random() * izquierda.length)])}`)) && msg.edit(fubol.setFooter("¡El partido ha finalizado!")) && msg.reactions.removeAll().catch(error => { return; });
          }
          if (reaction.emoji.id === '915771061394636871') {
            msg.edit(fubol.setDescription(`${(centro[Math.floor(Math.random() * centro.length)])}`)) && msg.edit(fubol.setFooter("¡El partido ha finalizado!")) && msg.reactions.removeAll().catch(error => { return; });
          }
          if (reaction.emoji.id === '915771002514989167') {
            msg.edit(fubol.setDescription(`${(derecha[Math.floor(Math.random() * derecha.length)])}`)) && msg.edit(fubol.setFooter("¡El partido ha finalizado!")) && msg.reactions.removeAll().catch(error => { return; });
          }

        }).catch(error => { return; });
    })
  }
}