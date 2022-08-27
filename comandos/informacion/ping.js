const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "ping",
    aliases: [],

    execute (client, message, args) {

      let ping = Math.floor(message.client.ping); 

			const pingN = new Discord.MessageEmbed() 
			.setTitle(':ping_pong: ¡Pong!')
      .setThumbnail("https://cdn.discordapp.com/attachments/909121957562314803/911329911556419604/ksRB6ZE.png")
      .addField("__Cliente:__",` \`\`\`cs\n${message.client.ws.ping} ms\`\`\``, true)
      .addField("__Mensajes:__",` \`\`\`cs\n${Math.floor(message.createdTimestamp - Date.now())} ms\`\`\``, true)
			.setColor("835aa2")
			.setTimestamp() 
			message.channel.send(pingN);

    }
}