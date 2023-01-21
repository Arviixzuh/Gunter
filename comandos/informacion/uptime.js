const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const moment = require('moment');
require('moment-duration-format');

module.exports = {
    name: "uptime",
    alias: [""],

    execute(client, message, args) {

        const actividad = moment.duration(message.client.uptime).format(' D[d] H[h] m[m] s[s]');

        const embed = new Discord.MessageEmbed()
            .setDescription(`🕐 Llevo **${actividad}** activo ayudando a **${message.client.guilds.cache.size}** servidores.`)
            .setColor("835aa2")
        message.channel.send(embed)

    }
}