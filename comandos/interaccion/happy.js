const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const star = require('star-labs');

module.exports = {
  name: "happy",
  alias: [""],

  async execute(client, message, args) {

    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author} Se siente muy feliz`)
      .setImage(star.happy())
      .setColor("835aa2")
      .setTimestamp();
    message.channel.send(embed);


  }
}