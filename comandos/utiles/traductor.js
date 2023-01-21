const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const translate = require("@iamtraction/google-translate");

module.exports = {
  name: "traductor",
  alias: ["traducir", "translate"],

  async execute(client, message, args) {

    const query = args.join(" ");
    if (!query) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡Debes colocar un texto para traducir!`
      }
    });

    const translated = await translate(query, { to: 'es' });

    const embed = new Discord.MessageEmbed()

      .setTitle("Traductor de Google")
      .setThumbnail(`https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png`)
      .addField("💬 Texto", `${query}`)
      .addField("🈸 Traducción", `${translated.text}`)
      .setColor("835aa2")

    message.channel.send(embed)

  }
}