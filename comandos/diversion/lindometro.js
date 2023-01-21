const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "lindometro",
  alias: [],

  execute(client, message, args) {

    let lindo = message.mentions.users.first()
    if (!lindo) {

      var rpts = [":face_vomiting: 5% :face_vomiting: ", ":face_vomiting: 10% :face_vomiting: ", ":face_vomiting: 15% :face_vomiting: ", ":face_vomiting: 20% :face_vomiting: ", ":laughing:  30% :laughing:  ", ":laughing: 40% :laughing: ", ":kissing_heart: 50% :kissing_heart:", ":kissing_heart: 60% :kissing_heart:", ":smiling_face_with_3_hearts: 70% :smiling_face_with_3_hearts: ", ":smiling_face_with_3_hearts: 80% :smiling_face_with_3_hearts: ", ":heart_eyes: 90% :heart_eyes:", ":heart_eyes: 100% :heart_eyes:"];

      const embed = new Discord.MessageEmbed()
        .setTitle('Lindometro :thermometer:')
        .addField(`El nivel de lindura de ${message.author.username} es de`, rpts[Math.floor(Math.random() * rpts.length)],)
        .setColor("835aa2")
      message.channel.send(embed)

    } else {

      var rpts = [":face_vomiting: 5% :face_vomiting: ", ":face_vomiting: 10% :face_vomiting: ", ":face_vomiting: 15% :face_vomiting: ", ":face_vomiting: 20% :face_vomiting: ", ":laughing:  30% :laughing:  ", ":laughing: 40% :laughing: ", ":kissing_heart: 50% :kissing_heart:", ":kissing_heart: 60% :kissing_heart:", ":smiling_face_with_3_hearts: 70% :smiling_face_with_3_hearts: ", ":smiling_face_with_3_hearts: 80% :smiling_face_with_3_hearts: ", ":heart_eyes: 90% :heart_eyes:", ":heart_eyes: 100% :heart_eyes:"];

      const embed = new Discord.MessageEmbed()
        .setTitle('Lindometro :thermometer:')
        .addField(`El nivel de lindura de ${lindo.username} es de`, rpts[Math.floor(Math.random() * rpts.length)],)
        .setColor("835aa2")
      message.channel.send(embed)


    }
  }
}

