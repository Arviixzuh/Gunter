const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "gaytest",
    aliases: ["gay"], 

    execute (client, message, args) {


      let gay = message.mentions.users.first()
      if (!gay) {

        var rpts = ["(**100%**) \n💬 ¡Claramente te encantan los hombres!", "(**20%**) \n💬 ¡Parece que sientes una pequeña atracción por los hombres!", "(**5%**) \n💬 Algo debio salir mal... Intenta otra vez", "(**80%**) \n¡Que esperas para salir del closet!", "(**45%**) \n💬 ¡Recuerda que puedes salir del closet cuando quieras!"];

        const embed = new Discord.MessageEmbed()
            .setTitle("**Test de Homosexualidad** 🏳️‍🌈")
            .setDescription(`**${message.author.username}** • Este es el porcentaje de tu homosexualidad: ${rpts[Math.floor(Math.random() * rpts.length)]}`)
            .setColor("835aa2")

        message.channel.send(embed)

      } else {

        var rpts = ["(**100%**) \n💬 ¡Claramente le encantan los hombres!", "(**20%**) \n💬 ¡Parece que siente una pequeña atracción por los hombres!", "(**5%**) \n💬 Algo debio salir mal... Intenta otra vez", "(**80%**) \n💬 ¡Que esperas para salir del closet!", "(**45%**) \n💬 ¡Recuerda que puedes salir del closet cuando quieras!"];

        const embed = new Discord.MessageEmbed()
            .setTitle("**Test de Homosexualidad** 🏳️‍🌈")
            .setDescription(`**${message.author.username}** • Este es el porcentaje de homosexualidad de **${gay.username}** ${rpts[Math.floor(Math.random() * rpts.length)]}`)
            .setColor("835aa2")

        message.channel.send(embed)


    }
}
}