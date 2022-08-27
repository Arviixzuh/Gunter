const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "mclogro",
    alias: [""], 

    async execute (client, message, args) {

      const texto = args.join(" "); 

const texto_logro = texto.replace(/( )/g, '+'); 

 if (!texto) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Debes colocar un texto!`
    }});
 
  if (texto.length > 25) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • ¡El texto solo puede contener hasta 25 carácteres!`
    }});

 if (texto.length < 2) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • ¡El logro debe de contener más de 2 letras!`
    }}); 

const imagen = Math.floor(Math.random() * 38) + 1;

const embed = new Discord.MessageEmbed()
.setImage(`https://minecraftskinstealer.com/achievement/${imagen}/%C2%A1Logro+Obtenido%21/${texto_logro}`)

message.channel.send(embed)


    }
}