const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "8ball",
  alias: [""],

  execute(client, message, args) {

    var rpts = ["¿Porque dices eso? o.O", "No pos Paletazoh UwU", "Tal vez -w-", "No se :l", "¡Claro! :D", "Si <3", "No >:(", "No digas eso :(", "¿Que crees tu? o-o"];

    let pregunt = args.slice(1).join(' ');
    if (!pregunt) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> ${message.author} • ¡Dedes decirme tu pregunta!`
      }
    });

    const embed = new Discord.MessageEmbed()
      .setTitle('Pregunta 8Ball :pencil:')
      .addField(`${message.author.username} pregunta:`, [(args).join(" ** ** ")],)
      .addField('Mi respuesta es:', rpts[Math.floor(Math.random() * rpts.length)],)
      .setColor("835aa2")
    message.channel.send(embed)

  }
}