const Discord = require("discord.js");
const canvacord  = require("canvacord");

module.exports = {
  name: "beautiful", 
  async execute (client, message, args) {
    let avatar = message.author.displayAvatarURL({
      dynamic: false,
      format: "png",
      size: 1024
    });
    
    let image = await canvacord.Canvas.beautiful(avatar);
    let attachment = new Discord.MessageAttachment(image, "beautiful.png");
    return message.channel.send(attachment);
  }
};