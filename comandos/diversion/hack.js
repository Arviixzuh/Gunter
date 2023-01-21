const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "hack",
    alias: [],

    execute(client, message, args,) {

        let user = message.mentions.users.first();
        if (!user) {

            var rpts = ["@gmail.com", "@hotmail.com", "@outlook.com"];
            var pass = ["killakill09779", "Manzana889", "carroblanco5346", "15135uvasferos", "siuuu9123", "44redkinG852", "soffteli10", "MaizMistico52"];
            var ip = ["172.897.245.0.1", "146.882.652.1.0", "156.890.327.90.0", "174.893.654.85.7", "197.243.9.1.49", "155.64.643.7.33", "85.312.348.14.0"];

            var complemento = ["1998", "77", "TheBest", "PC", "MCPvP", "56", "Gamer", "GG", "40", "33", "10", "79", "js", "2004", "2045", "045", "jaja"];

            const embed = new Discord.MessageEmbed()
                .setTitle('Hackeo completado :detective:')
                .addField(':envelope: Email', `${message.author.username}` + complemento[Math.floor(Math.random() * complemento.length)] + rpts[Math.floor(Math.random() * rpts.length)],)
                .addField(':lock: Contraseña', pass[Math.floor(Math.random() * pass.length)],)
                .addField(':satellite_orbital: Direccion IP', ip[Math.floor(Math.random() * ip.length)],)
                .setTimestamp()
                .setColor("835aa2")

            message.channel.send(embed)

        } else {

            var rpts = ["@gmail.com", "@hotmail.com", "@outlook.com"];
            var pass = ["killakill09779", "Manzana889", "carroblanco5346", "15135uvasferos", "siuuu9123", "44redkinG852", "soffteli10", "MaizMistico52"];
            var ip = ["172.897.245.0.1", "146.882.652.1.0", "156.890.327.90.0", "174.893.654.85.7", "197.243.9.1.49", "155.64.643.7.33", "85.312.348.14.0"];

            var complemento = ["1998", "77", "TheBest", "PC", "MCPvP", "56", "Gamer", "GG", "40", "33", "10", "79", "js", "2004", "2045", "045", "jaja"];

            const embed = new Discord.MessageEmbed()
                .setTitle('Hackeo completado :detective:')
                .addField(':envelope: Email', `${user.username}` + complemento[Math.floor(Math.random() * complemento.length)] + rpts[Math.floor(Math.random() * rpts.length)],)
                .addField(':lock: Contraseña', pass[Math.floor(Math.random() * pass.length)],)
                .addField(':satellite_orbital: Direccion IP', ip[Math.floor(Math.random() * ip.length)],)
                .setFooter(`${message.author.username} hackeo a ${user.username}`)
                .setColor("835aa2")

            message.channel.send(embed)

        };

    }
}

