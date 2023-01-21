const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const star = require('star-labs');

module.exports = {
  name: "blush",
  alias: [""],

  async execute(client, message, args) {

    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author} Se sonrojó`)
      .setImage(star.blush())
      .setColor("835aa2")
      .setTimestamp();
    message.channel.send(embed);


  }
}