const Discord = require("discord.js");
const canvacord  = require("canvacord");

module.exports = {
  name: "hitler", 
  async execute (client, message, args) {
    let avatar = message.author.displayAvatarURL({
      dynamic: false,
      format: "png",
      size: 1024
    });
    
    let image = await canvacord.Canvas.hitler(avatar);
    let attachment = new Discord.MessageAttachment(image, "hitler.png");
    return message.channel.send(attachment);
  }
};