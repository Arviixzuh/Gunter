const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const star = require('star-labs');

module.exports = {
  name: "dance",
  alias: [""],

  async execute(client, message, args) {

    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author} Está bailando`)
      .setImage(star.dance())
      .setColor("835aa2")
      .setTimestamp();
    message.channel.send(embed);


  }
}