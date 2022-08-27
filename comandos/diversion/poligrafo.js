const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "poligrafo",
    alias: [], 

    execute (client, message, args) {


        var rpts = [":white_check_mark: **Verdadera** ", ":x: **Falsa**"];

        let pregunt = args.slice(1).join(' ');
        if (!pregunt) return message.channel.send({embed: {
      color: 15158332,
      description: `:x: **${message.author.username}** • Dedes decirme tu afirmación.`
    }});

        const embed = new Discord.MessageEmbed()
            .setTitle('Detector de mentiras :clown:')
            .addField(`La afirmación de ${message.author.username}`, [(args).join(" ** ** ")],)
            .addField('Parece ser', rpts[Math.floor(Math.random() * rpts.length)],)
            .setColor("835aa2")

        message.channel.send(embed)


    }
}
