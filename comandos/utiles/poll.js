const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "poll",
    alias: [""], 

    execute (client, message, args, prefix) {

      const embed = new Discord.MessageEmbed()
      .setDescription("<a:alert:907348214036983869> **Error** • ¡Este comando se encuentra en mantenimiento!")
      .setColor("RED")
      message.channel.send(embed)

    //   const opcion = args[0];
    //   const canal = message.mentions.channels.first();
    //   const color = args[2];
    //   const encuesta = args.slice(3).join(' ');

		//   let Options = ["embed"];
    //   var Color = ["rojo", "azul", "naranja", "verde", "amarillo", "morado", "random", "default"];

    //   var randomColor = ["ec8585", "82a6f1", "ecb185", "95ec85", "e7dc81", "b19bfc"];

    //   const rcolor = randomColor[Math.floor(Math.random() * randomColor.length)]

    // if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send({embed: {
    //   color: 15158332,
    //   description: `<a:alert:907348214036983869> **Error** • ¡No tienes permisos para usar este comando!`
    // }});

    //   if(!Options.includes(args[0])){
    //     const embed = new Discord.MessageEmbed()
    //     .setTitle("Encuestas 📊")
    //     .setColor("RED")
    //     .setThumbnail('https://i.imgur.com/zBSSB3y.png')
    //     .setDescription(`<a:alert:907348214036983869> **${message.author.username}** • ¡Verifica tu comando e inténtalo nuevamente!\n\n__**Modo de uso:**__\n\n> ${prefix}poll \`[embed] [#canal-encuestas] [color] [encuesta]\`\n\n__**Nota:**__\n\n**1)** ¡No colocar los corchetes!\n\n__**Colores disponibles:**__\n\n 🔴 » rojo\n🔵 » azul\n🟠 » naranja\n🟢 » verde\n🟡 » amarillo\n🟣 » morado\n🔒 » default\n🎲 » random`)
    //     .setFooter("Sistema de encuestas")
    //     .setTimestamp()
    //     return message.channel.send(embed)
    //   }

    // if(!canal) return message.channel.send({embed: {
    //   color: 15158332,
    //   description: `<a:alert:907348214036983869> **Error** • ¡Debes mencionar un canal!`
    // }});

    // if(canal.guild.id !== message.guild.id) return message.channel.send({embed: {
    //   color: 15158332,
    //   description: `<a:alert:907348214036983869> **Error** • ¡El canal mencionado no pertenece a este servidor!`
    // }});

    // if(canal.type == 'voice' || canal.type == 'category') return message.channel.send({embed: {
    //   color: 15158332,
    //   description: `<a:alert:907348214036983869> **Error** • ¡Debes mencionar un canal de texto!`
    // }});

    // if(!Color.includes(args[2].toLowerCase())) return message.channel.send({embed: {
    //   color: 15158332,
    //   description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Debes selecionar un color valido!\n\n__**Colores disponibles:**__\n\n 🔴 » rojo\n🔵 » azul\n🟠 » naranja\n🟢 » verde\n🟡 » amarillo\n🟣 » morado\n🔒 » default\n🎲 » random`
    // }});

    // if(!encuesta) return message.channel.send({embed: {
    //   color: 15158332,
    //   description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Debes escribir la encuesta!`
    // }});


    // if(color.toLowerCase() == 'rojo') {
			
		// 	const embed = new Discord.MessageEmbed()

    //   .setTitle("¡Nueva Encuesta! 📊 ")
		// 	.setDescription(`**${encuesta}**`)
    //   .setColor("ec8585")
			
		// 	return canal.send(embed).then(async msg => {
    //     await msg.react('👍')
    //     await msg.react('👎')
    //     message.channel.send({embed: {
    //   color: 3066993,
    //   description: `<a:check:907350759782350918> • **¡Encuesta enviada correctamente!**`
    // }})
    // });
			
		// }

    // if(color.toLowerCase() == 'azul'){
			
		// 	const embed = new Discord.MessageEmbed()
    //   .setTitle("¡Nueva Encuesta! 📊 ")
		// 	.setDescription(`**${encuesta}**`)
    //   .setColor("82a6f1")
			
		// 	return canal.send(embed).then(async msg => {
    //     await msg.react('👍')
    //     await msg.react('👎')
    //     message.channel.send({embed: {
    //   color: 3066993,
    //   description: `<a:check:907350759782350918> • **¡Encuesta enviada correctamente!**`
    // }})
    // });
			
		// }

    // if(color.toLowerCase() == 'naranja'){
			
		// 	const embed = new Discord.MessageEmbed()
    //   .setTitle("¡Nueva Encuesta! 📊 ")
		// 	.setDescription(`**${encuesta}**`)
    //   .setColor("ecb185")
			
		// 	return canal.send(embed).then(async msg => {
    //     await msg.react('👍')
    //     await msg.react('👎')
    //     message.channel.send({embed: {
    //   color: 3066993,
    //   description: `<a:check:907350759782350918> • **¡Encuesta enviada correctamente!**`
    // }})
    // });
			
		// }

    // if(color.toLowerCase() == 'verde'){
			
		// 	const embed = new Discord.MessageEmbed()
    //   .setTitle("¡Nueva Encuesta! 📊 ")
		// 	.setDescription(`**${encuesta}**`)
    //   .setColor("95ec85")
			
		// 	return canal.send(embed).then(async msg => {
    //     await msg.react('👍')
    //     await msg.react('👎')
    //     message.channel.send({embed: {
    //   color: 3066993,
    //   description: `<a:check:907350759782350918> • **¡Encuesta enviada correctamente!**`
    // }})
    // });
			
		// }

    // if(color.toLowerCase() == 'amarillo'){
			
		// 	const embed = new Discord.MessageEmbed()
    //   .setTitle("¡Nueva Encuesta! 📊 ")
		// 	.setDescription(`**${encuesta}**`)
    //   .setColor("e7dc81")
			
		// 	return canal.send(embed).then(async msg => {
    //     await msg.react('👍')
    //     await msg.react('👎')
    //     message.channel.send({embed: {
    //   color: 3066993,
    //   description: `<a:check:907350759782350918> • **¡Encuesta enviada correctamente!**`
    // }})
    // });
			
		// }

    // if(color.toLowerCase() == 'morado'){
			
		// 	const embed = new Discord.MessageEmbed()
    //   .setTitle("¡Nueva Encuesta! 📊 ")
		// 	.setDescription(`**${encuesta}**`)
    //   .setColor("b19bfc")
			
		// 	return canal.send(embed).then(async msg => {
    //     await msg.react('👍')
    //     await msg.react('👎')
    //     message.channel.send({embed: {
    //   color: 3066993,
    //   description: `<a:check:907350759782350918> • **¡Encuesta enviada correctamente!**`
    // }})
    // });
			
		// }

    // if(color.toLowerCase() == 'random'){
			
		// 	const embed = new Discord.MessageEmbed()
    //   .setTitle("¡Nueva Encuesta! 📊 ")
		// 	.setDescription(`**${encuesta}**`)
    //   .setColor(`${rcolor}`)
			
		// 	return canal.send(embed).then(async msg => {
    //     await msg.react('👍')
    //     await msg.react('👎')
    //     message.channel.send({embed: {
    //   color: 3066993,
    //   description: `<a:check:907350759782350918> • **¡Encuesta enviada correctamente!**`
    // }})
    // });

    // }

    // if(color.toLowerCase() == 'default'){
			
		// 	const embed = new Discord.MessageEmbed()
    //   .setTitle("¡Nueva Encuesta! 📊 ")
		// 	.setDescription(`**${encuesta}**`)
    //   .setColor("835aa2")
			
		// 	return canal.send(embed).then(async msg => {
    //     await msg.react('👍')
    //     await msg.react('👎')
    //     message.channel.send({embed: {
    //   color: 3066993,
    //   description: `<a:check:907350759782350918> • **¡Encuesta enviada correctamente!**`
    // }})
    // });
			
		// }

}
}