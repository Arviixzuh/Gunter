const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');
const star = require('star-labs');

module.exports = {
    name: "sleep",
    alias: [""], 

    async execute (client, message, args) {

  const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.author.username}** se quedo dormido, ¡Hangan silencio!`)
    .setImage(star.sleep())
    .setColor("835aa2")
    .setTimestamp();
  message.channel.send(embed);


    }
}