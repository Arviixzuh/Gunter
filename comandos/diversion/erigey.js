const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "erigey",
  alias: ["cris"],

  async execute(client, message, args) {

    const embed = new Discord.MessageEmbed()
      .setColor("835aa2")
      .setDescription("Sí • `👍`\nNo • `👎`")
      .setImage('https://media.discordapp.net/attachments/909121957562314803/978456505026244658/R.jpg?width=528&height=395')

    message.channel.send(embed).then(async (msg) => {

      await msg.react('👍')
      await msg.react('👎')

      msg.awaitReactions((reaction, user) => {

        if (reaction.emoji.name === '👍') {
          msg.edit(embed.setDescription(`Sabia que dirías que si 😈`)) &&
            msg.edit(embed.setImage()) && msg.reactions.removeAll();
        }

        if (reaction.emoji.name === '👎') {
          reaction.users.remove(message.author.id)
        }

      })
    })
  }

}