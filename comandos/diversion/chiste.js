const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "chiste",
  alias: [""],

  execute(client, message, args) {

    var chistes = [`- ¿De donde sale la porcelana?\n- De las porce-ovejas`, `- ¿Como un matematico celebra su cumpleaños?\n- Con una PI-ñata y con una PI-zza`]

    const embed = new Discord.MessageEmbed()
      .setTitle("Chistes de Arviixzuh")
      .setDescription(chistes[Math.floor(Math.random() * chistes.length)])
      .setColor("835aa2")
    message.channel.send(embed)


  }
}