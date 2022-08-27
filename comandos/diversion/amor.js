const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "amor",
    alias: ["love"], 

    execute (client, message, args) {

      let user = message.mentions.users.first(); 
		
        if (message.mentions.users.size < 1) return message.channel.send({embed: {
      color: 15158332,
      description: `<:corazon:909507103004196944> **${message.author.username}** • ¡Dedes mencionar a un usuario para calcular el ship!`
    }});

        var rpts = [":broken_heart: 58% :broken_heart:", ":heartbeat: 76% :heartbeat:", ":cupid:  90% :cupid:", ":sob: 4% :sob:", ":pensive: 23% :pensive:", ":face_with_raised_eyebrow: 30% :face_with_raised_eyebrow:", ":blush: 45% :blush:", ":sparkling_heart: 83% :sparkling_heart:", ":cold_sweat: 21% :cold_sweat: ", ":neutral_face: 14% :neutral_face:" ];

        const embed = new Discord.MessageEmbed()
            .setTitle('Medidor de Amor :sparkles:')
            .setDescription(`El porcentaje de amor entre ${message.author} y ${user} es de **${rpts[Math.floor(Math.random() * rpts.length)]}**`)
            .setColor("835aa2") //885afd

            message.channel.send(embed)


    }
}

