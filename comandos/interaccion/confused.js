const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const star = require('star-labs');

module.exports = {
  name: "confused",
  alias: [""],

  async execute(client, message, args) {

    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author} Se encuentra confundid@`)
      .setImage(star.confused())
      .setColor("835aa2")
      .setTimestamp();
    message.channel.send(embed);


  }
}