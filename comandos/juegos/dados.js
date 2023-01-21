const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "dados",
    alias: [],

    execute(client, message, args,) {

        var rpts = ["https://cdn-icons-png.flaticon.com/512/3517/3517395.png", "https://cdn-icons-png.flaticon.com/512/3517/3517400.png", "https://cdn-icons-png.flaticon.com/512/3517/3517408.png", "https://cdn-icons-png.flaticon.com/512/3517/3517414.png", "https://cdn-icons-png.flaticon.com/512/3517/3517420.png", "https://cdn-icons-png.flaticon.com/512/3517/3517427.png"]

        const embed = new Discord.MessageEmbed()
            .setDescription(":game_die: **_El dado ha caido en:_**")
            .setImage(rpts[Math.floor(Math.random() * rpts.length)])
            .setFooter(`Tirado por • ${message.author.username}`)
            .setColor("835aa2")

        message.channel.send(embed)


    }
}

