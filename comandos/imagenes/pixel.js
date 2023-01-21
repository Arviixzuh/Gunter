const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
  name: "pixel",
  async execute(client, message, args) {
    let avatar = message.author.displayAvatarURL({
      dynamic: false,
      format: "png",
      size: 1024
    });

    let image = await canvacord.Canvas.pixelate(avatar);
    let attachment = new Discord.MessageAttachment(image, "pixel.png");
    return message.channel.send(attachment);
  }
};