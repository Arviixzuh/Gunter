const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const request = require("request");

module.exports = {
    name: "mchead",
    alias: ["head"],

    async execute(client, message, args) {

        const nombre = args.join(" ");
        if (!nombre) {
            let e = new MessageEmbed();
            e.setColor("RED");
            e.setDescription(`<a:alert:907348214036983869> **${message.author.username}** • ¡Debes colocar el nombre de un jugador de Minecraft!`);
            return message.channel.send(e);
        }
        if (nombre.length > 16) {
            let e = new MessageEmbed();
            e.setColor("RED");
            e.setDescription("<a:alert:907348214036983869> **Error** • ¡No puedes poner mas de **16** caracteres!");
            return message.channel.send(e);
        }
        let mojang_player_api = `https://api.mojang.com/users/profiles/minecraft/${nombre}`;
        request(mojang_player_api, function (err, resp, body) {
            if (err) {
                let e = new MessageEmbed();
                e.setColor("RED");
                e.setDescription(`<a:alert:907348214036983869> **Error** • ¡El usuario **${nombre}** no es un jugador premium!`);
                return message.channel.send(e);
            }
            try {
                body = JSON.parse(body);
                let player_id = body.id;
                let avatar = `https://mc-heads.net/head/${nombre}`;

                let embed = new MessageEmbed();
                embed.setDescription(`• Cabeza de **${nombre}**\n`)
                embed.setImage(avatar);
                embed.setColor("835aa2");
                return message.channel.send(embed);
            } catch (err) {
                let embed_error = new MessageEmbed();
                embed_error.setColor("RED");
                embed_error.setDescription(`<a:alert:907348214036983869> **Error** • ¡El usuario **${nombre}** no es un jugador premium!`);
                return message.channel.send(embed_error);
            }
        });


    }
}