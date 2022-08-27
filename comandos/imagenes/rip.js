const Discord = require("discord.js");
const canvacord  = require("canvacord");

module.exports = {
  name: "rip", 
  async execute (client, message, args) {
    let avatar = message.author.displayAvatarURL({
      dynamic: false,
      format: "png",
      size: 1024
    });
    
    let image = await canvacord.Canvas.rip(avatar);
    let attachment = new Discord.MessageAttachment(image, "riped.png");
    return message.channel.send(attachment);
  }
};