const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "queue",
    alias: ["q"], 

    execute (client, message, args) {

      const queue = client.distube.getQueue(message)

   if(!message.member.voice.channel) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Debes estar en un canal de voz!`
    }})

      if(!queue) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • ¡No hay canciones en la lista!`
    }})

    let song = queue.songs[0]; 

    const embed = new Discord.MessageEmbed()

    .setTitle("PlayList 📜")
    .setThumbnail('https://cdn.discordapp.com/emojis/913640838884655134.gif?size=44')
    .setDescription('\n' + queue.songs.map((song, id) => `**${id + 1}#** [${song.name}](${song.url}) - \`${song.formattedDuration}\``).slice(0, 10).join("\n"))
    .addField("🔊 Volumen", `\`${queue.volume}%\``, true)
    .addField("🎵 Canciones", `\`${queue.songs.length} - ${queue.formattedDuration}\``, true)
    .addField("〽️ Autoplay", `\`${queue.autoplay ? "✔️" : "❌"}\``, true)
    .addField("❓ Filtro", `\`${queue.filter || "❌"}\``, true)
    .addField("⏱ Duración:", `\`${queue.formattedCurrentTime} / ${song.formattedDuration}\``, true)
    .addField("♾ Loop", `\`${queue.repeatMode ? queue.repeatMode === 2 ? "✔️ PlayList" : "✔️ Esta Canción" : "❌"}\``, true)
    .setColor("835aa2")

    message.channel.send(embed)


    }
}