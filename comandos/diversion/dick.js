const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "dick",
    alias: [], 

    execute (client, message, args,) {

      let pene = message.mentions.users.first()

      if (!pene) {

        var rpts = [":flushed: 15 Cm :flushed:", ":face_with_monocle: 12 cm :face_with_monocle:", ":sunglasses: 4 cm :sunglasses:", ":exploding_head:  19 cm :exploding_head:", ":hot_face: 30 cm :hot_face:", ":smiling_imp: 8 cm :smiling_imp:", ":astonished: 7 cm :astonished:", ":pleading_face: 26 cm :pleading_face:"];

        const embed = new Discord.MessageEmbed()
            .setTitle('Regla :straight_ruler:')
            .addField(`El tamaño del pene de ${message.author.username} es de`, rpts[Math.floor(Math.random() * rpts.length)],)
            .setColor("835aa2")

            message.channel.send(embed)
          
          } else {

            var rpts = [":flushed: 15 Cm :flushed:", ":face_with_monocle: 12 cm :face_with_monocle:", ":sunglasses: 4 cm :sunglasses:", ":exploding_head:  19 cm :exploding_head:", ":hot_face: 30 cm :hot_face:", ":smiling_imp: 8 cm :smiling_imp:", ":astonished: 7 cm :astonished:", ":pleading_face: 26 cm :pleading_face:"];

      const embed = new Discord.MessageEmbed()
      .setTitle('Regla :straight_ruler:')
      .addField(`El tamaño del pene de ${pene.username} es de`, rpts[Math.floor(Math.random() * rpts.length)],)
      .setColor("835aa2")

      message.channel.send(embed)

    };


    }
}
