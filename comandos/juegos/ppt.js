const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
	name: "ppt",
	alias: [""],

	execute(client, message, args,) {

		const opcion = args[0]

		if (!opcion) return message.channel.send({
			embed: {
				color: 15158332,
				description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Dedes elegir entre **piedra**, **papel** o **tijera**!`
			}
		});

		let Options = ["piedra", "papel", "tijera"];

		if (!Options.includes(args[0].toLowerCase())) return message.channel.send({
			embed: {
				color: 15158332,
				description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Dedes elegir entre **piedra**, **papel** o **tijera**!`
			}
		});

		var rpts = ["priedra :fist: Tú **pierdes**", "papel :hand_splayed: Tú **ganas**", "tijera :v: Es un **empate**"]
		var rpts2 = ["priedra :fist: Tú **ganas**", "papel :hand_splayed: es un **empate**", "tijera :v: Tú **pierdes**"]
		var rpts3 = ["priedra :fist: es un **empate**", "papel :hand_splayed: Tú **pierdes**", "tijera :v: Tú **ganas**"]

		if (opcion.toLowerCase() == 'tijera') {
			const embed = new Discord.MessageEmbed()
				.setColor("835aa2")
				.setDescription(`**${message.author.username}** • He elegido ${(rpts[Math.floor(Math.random() * rpts.length)])}`)
			return message.channel.send(embed)
		}

		if (opcion.toLowerCase() == 'papel') {
			const embed = new Discord.MessageEmbed()
				.setColor("835aa2")
				.setDescription(`**${message.author.username}** • He elegido ${(rpts2[Math.floor(Math.random() * rpts2.length)])}`)
			return message.channel.send(embed)
		}

		if (opcion.toLowerCase() == 'piedra') {
			const embed = new Discord.MessageEmbed()
				.setColor("835aa2")
				.setDescription(`**${message.author.username}** • He elegido ${(rpts3[Math.floor(Math.random() * rpts3.length)])}`)
			return message.channel.send(embed)
		}

	}
}