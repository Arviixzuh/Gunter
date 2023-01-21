const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
  name: "trigger",
  async execute(client, message, args) {
    let avatar = message.author.displayAvatarURL({
      dynamic: false,
      format: "png",
      size: 1024
    });

    let image = await canvacord.Canvas.trigger(avatar);
    let attachment = new Discord.MessageAttachment(image, "triggered.gif");
    return message.channel.send(attachment);
  }
};