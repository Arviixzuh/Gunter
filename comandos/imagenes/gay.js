const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
  name: "gay",
  async execute(client, message, args) {
    let avatar = message.author.displayAvatarURL({
      dynamic: false,
      format: "png",
      size: 1024
    });

    let image = await canvacord.Canvas.rainbow(avatar);
    let attachment = new Discord.MessageAttachment(image, "rainbow.png");
    return message.channel.send(attachment)

  }
}