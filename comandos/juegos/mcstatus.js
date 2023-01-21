const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const request = require("request");

module.exports = {
    name: "mcstatus",
    alias: [],

    execute(client, message, args) {
        let { status } = require("minecraft-server-util")

        let servidor_ip = args.join(" ");
        let versReplace = /§\w/g;

        if (!servidor_ip) return message.channel.send({
            embed: {
                color: 15158332,
                description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Debes colocar la ip de un servidor!`
            }
        });

        status(servidor_ip).then(async (m) => {
            let jugadores_activos = m.onlinePlayers
            let jugadores_maximos = m.maxPlayers
            let version = m.version.replace(versReplace, "")
            let motd = `http://status.mclive.eu/MinecraftServer/${args[0]}/25565/banner.png`

            const embed = new Discord.MessageEmbed();
            embed.setColor("GREEN");
            embed.setThumbnail(`https://eu.mc-api.net/v3/server/favicon/${servidor_ip}`);
            embed.setDescription(`<a:check:907350759782350918> **¡Servidor Conectado!**\n\n> 🌐 **IP:** ${servidor_ip}\n> 👥 **Jugadores:** ${jugadores_activos.toLocaleString()}/${jugadores_maximos.toLocaleString()}\n> 🛠️ **Software:** ${version}\n> 📌 **Tipo:** Java`);
            embed.setImage(motd)
            return message.channel.send(embed);

        }).catch(err => {
            let errormc = `https://cdn.discordapp.com/attachments/909121957562314803/909523869193363477/ScreenShot_20211114152248.png`
            let embed_error = new Discord.MessageEmbed();
            embed_error.setColor("RED");
            embed_error.setImage(errormc)
            embed_error.setThumbnail(`https://cdn.discordapp.com/attachments/909121957562314803/909122145504886854/favicon.png`);
            embed_error.setDescription(`<a:error:909528174063415307> **¡Servidor no Conectado!**\n\n> • El host __${servidor_ip}__ no ha respondido.\n> • ¡Verifica la dirección IP y vuelve a intentarlo!`);
            return message.channel.send(embed_error);
        })
    }
}