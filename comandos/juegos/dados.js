const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "dados",
    alias: [], 

    execute (client, message, args,) {

        var rpts = ["https://cdn.discordapp.com/attachments/684757256658747451/794277079243685888/dado-1.png", "https://cdn.discordapp.com/attachments/684757256658747451/794277107537805332/dado-2.png", "https://cdn.discordapp.com/attachments/684757256658747451/794277142800105483/dado-3.png", "https://cdn.discordapp.com/attachments/684757256658747451/794277176592826368/dado-4.png", "https://cdn.discordapp.com/attachments/684757256658747451/794277207619010590/dado-5.png", "https://cdn.discordapp.com/attachments/684757256658747451/794277245157113866/dado-6.png"]

    const embed = new Discord.MessageEmbed()
        .setDescription(":game_die: **_El dado ha caido en:_**")
        .setImage(rpts[Math.floor(Math.random() * rpts.length)])
		.setFooter(`Tirado por • ${message.author.username}`)
        .setColor("835aa2")

        message.channel.send(embed)


    }
}

