const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');
const cooldown = new Set();

module.exports = {
    name: "tictactoe",
    alias: ["ttt"], 

    async execute (client, message, args, reaction) {

      if(cooldown.has(message.author.id))
        return message.channel.send({embed: {
      color: 15158332,
      description: `<a:time:918292719598710834> **${message.author.username}** • ¡Debes esperar **10 segundos** antes de volver a usar este comando!`
    }}).then(m => m.delete({timeout: 10000}));

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, 10000);

      const ttt0 = message.author
	  const ttt1 = message.mentions.members.first()
      const tttbot = message.mentions.users.first()

	if(!ttt1)return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Debes mencionar a un miembro del servidor para jugar!`
    }});
      if(tttbot.bot) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • ¡No puedes jugar con un BOT!`

      }});

	if(ttt0.id === ttt1.id)return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${message.author.username}** • ¡Debes mencionar un miembro del servidor para jugar!`
    
    }});

			const pish0 = ":x:"
			const pish1 = ":o:"

			let turn = 0

			let line1 =	['▫', '▫', '▫']
			let line2 =	['▫', '▫', '▫']
			let line3 =	['▫️', '▫️', '▫']

      const siono = new Discord.MessageEmbed()
			.setDescription(`🏆 • **¿Quieres jugar tictactoe?**\n\n__${message.author.username} te ha desafiado a un duelo__`)
      .setFooter("Tienes 2 minutos para responder...")
			.setColor("835aa2")

			const waiting = new Discord.MessageEmbed()
			.setDescription("<a:loading:908139972161323079> • **Espera mientras cargan las reacciones...**")
			.setColor("835aa2")

      const limite = new Discord.MessageEmbed()
      .setDescription(`<a:tictac:924809073994637323> **¡Limite de tiempo alcanzado!**`)
      .setFooter(`Parece que ${ttt1.user.username} no puede jugar...`)
      .setColor("RED")

      const noquiero = new Discord.MessageEmbed()
      .setDescription(`🐓 **¡Duelo rechazado!**`)
      .setFooter(`Parece que ${ttt1.user.username} no quiere jugar...`)
      .setColor("RED")

const winner = new Discord.MessageEmbed()
			  .setFooter(`Solicitado por • ${message.author.username}`)
			  .setColor("835aa2")

			const embedttt = new Discord.MessageEmbed()
			.setTitle(`Te toca ${ttt0.username} » :x:`)
      .setThumbnail('https://media.discordapp.net/attachments/909121957562314803/924768095883636757/apps.61257.14203057749796315.9dac3f38-37d2-416e-b25e-0ebadc2c7ea8.png')
			.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" "))
			.setColor("835aa2");

            const allF =  (reaction, user) => reaction.emoji.name === '1⃣' || reaction.emoji.name === '2⃣' || reaction.emoji.name === '3⃣' || reaction.emoji.name === '7⃣' || reaction.emoji.name === '8⃣' ||  reaction.emoji.name === '9⃣' ||  reaction.emoji.name === '6⃣' ||  reaction.emoji.name === '4⃣' || reaction.emoji.name === '5⃣' && (user.id === ttt0.id || user.id === ttt1.id)
		      const arribaizquierdaF = (reaction, user) => reaction.emoji.name === '1⃣' && (user.id === ttt0.id || user.id === ttt1.id);
              const arribaF = (reaction, user) => reaction.emoji.name === '2⃣' && (user.id === ttt0.id || user.id === ttt1.id);
              const arribaderechaF = (reaction, user) => reaction.emoji.name === '3⃣' && (user.id === ttt0.id || user.id === ttt1.id);
			  const abajoizquierdaF = (reaction, user) => reaction.emoji.name === '7⃣' && (user.id === ttt0.id || user.id === ttt1.id);
              const abajoF = (reaction, user) => reaction.emoji.name === '8⃣' && (user.id === ttt0.id || user.id === ttt1.id);
			  const abajoderechaF = (reaction, user) => reaction.emoji.name === '9⃣' && (user.id === ttt0.id || user.id === ttt1.id);
			  const derechaF = (reaction, user) => reaction.emoji.name === '6⃣' && (user.id === ttt0.id || user.id === ttt1.id);
			  const izquierdaF = (reaction, user) => reaction.emoji.name === '4⃣' && (user.id === ttt0.id || user.id === ttt1.id);
			  const centroF = (reaction, user) => reaction.emoji.name === '5⃣' && (user.id === ttt0.id || user.id === ttt1.id);
  
			  var reactionUses = 0

        let msgsiono = await message.channel.send(siono)

				await msgsiono.react('907350759782350918')
				await msgsiono.react("909528174063415307")

        let thumbsup = '907350759782350918';
        let thumbsdown = '909528174063415307';

      const filter = (reaction, user) => {
      return [thumbsup, thumbsdown].includes(reaction.emoji.id) && user.id == ttt1.id;
    };

      msgsiono.awaitReactions(filter, { max: 1, time: 120000})
      .then(async collection => {

        const reaction = collection.first();
        if(!reaction) {
			msgsiono.edit(limite) && msgsiono.reactions.removeAll();
		} else {
			if(reaction.emoji.id === '909528174063415307') {
				msgsiono.edit(noquiero)
				msgsiono.reactions.removeAll();
			  }
		

        if(reaction.emoji.id === '907350759782350918') {

        // Eliminamos las reacciones
        msgsiono.reactions.removeAll();
        msgsiono.edit(waiting).then(async msg => {

        await msg.react("1⃣")
				await msg.react("2⃣")
				await msg.react("3⃣")
			    await msg.react("4⃣")
			    await msg.react("5⃣")
				await msg.react("6⃣")
				await msg.react("7⃣")
				await msg.react("8⃣")
				await msg.react("9⃣")
				await msg.edit(embedttt)	
  

				const all = msg.createReactionCollector(allF, {time: 120000});
				const arribaizquierda = msg.createReactionCollector(arribaizquierdaF, {time: 120000});
				const arriba = msg.createReactionCollector(arribaF, {time: 120000});
				const abajoizquierda = msg.createReactionCollector(abajoizquierdaF, {time: 120000});
				const arribaderecha = msg.createReactionCollector(arribaderechaF, {time: 120000});
				const abajo = msg.createReactionCollector(abajoF, {time: 120000});
				const abajoderecha = msg.createReactionCollector(abajoderechaF, {time: 120000});
				const derecha = msg.createReactionCollector(derechaF, {time: 120000});
				const izquierda = msg.createReactionCollector(izquierdaF, {time: 120000});
				const centro = msg.createReactionCollector(centroF, {time: 120000});


			
        arribaizquierda.on("collect", async function(r) { 

				if(turn === 0){ 

					if(r.users.cache.sort(m => m.bot === r.users.remove(ttt1)).map(p => p.id).includes(ttt1.id)) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${ttt1.user.username}** • ¡Debes esperar tu turno!`
    }}).then((m) => m.delete({ timeout: 5000 }))
					line1.splice(0, 1, pish0) 
					turn++; 
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle(`Te toca ${ttt1.user.username} » :o:`))
					await r.remove(message.author) 
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle(`¡Ha ganado ${ttt0.username}! <a:confetti:910757409520250900>`)) && msg.reactions.removeAll();
		   
				} else if(turn === 1){

          
					if(r.users.cache.sort(m => m.bot === r.users.remove(ttt0)).map(p => p.id).includes(ttt0.id)) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${ttt0.username}** • ¡Debes esperar tu turno!`
    }}).then((m) => m.delete({ timeout: 5000 }))

					line1.splice(0, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle(`Te toca ${ttt0.username} » :x:`))
					await r.remove(message.author) 

					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle(`¡Ha ganado ${ttt1.user.username}! <a:confetti:910757409520250900>`)) && msg.reactions.removeAll();
				}
			
			})


  
        arriba.on("collect", async function(r) {
				if(turn === 0){
					if(r.users.cache.sort(m => m.bot === r.users.remove(ttt1)).map(p => p.id).includes(ttt1.id)) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${ttt1.user.username}** • ¡Debes esperar tu turno!`
    }}).then((m) => m.delete({ timeout: 5000 }))
					line1.splice(1, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle(`Te toca ${ttt1.user.username} » :o:`))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle(`¡Ha ganado ${ttt0.username}! <a:confetti:910757409520250900>`)) && msg.reactions.removeAll();

				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === r.users.remove(ttt0)).map(p => p.id).includes(ttt0.id)) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${ttt0.username}** • ¡Debes esperar tu turno!`
    }}).then((m) => m.delete({ timeout: 5000 }))
					line1.splice(1, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle(`Te toca ${ttt0.username} » :x:`))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle(`¡Ha ganado ${ttt1.user.username}! <a:confetti:910757409520250900>`)) && msg.reactions.removeAll();

				}
			  })

           abajoizquierda.on("collect", async function(r) {
                if(turn === 0){
					if(r.users.cache.sort(m => m.bot === r.users.remove(ttt1)).map(p => p.id).includes(ttt1.id)) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${ttt1.user.username}** • ¡Debes esperar tu turno!`
    }}).then((m) => m.delete({ timeout: 5000 }))
					line3.splice(0, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle(`Te toca ${ttt1.user.username} » :o:`))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle(`¡Ha ganado ${ttt0.username}! <a:confetti:910757409520250900>`)) && msg.reactions.removeAll();

				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === r.users.remove(ttt0)).map(p => p.id).includes(ttt0.id)) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${ttt0.username}** • ¡Debes esperar tu turno!`
    }}).then((m) => m.delete({ timeout: 5000 }))
					line3.splice(0, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle(`Te toca ${ttt0.username} » :x:`))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle(`¡Ha ganado ${ttt1.user.username}! <a:confetti:910757409520250900>`)) && msg.reactions.removeAll();

				}
			})

/*LINEA 1-2*/  arribaderecha.on("collect", async function(r) {
                if(turn === 0){
					if(r.users.cache.sort(m => m.bot === r.users.remove(ttt1)).map(p => p.id).includes(ttt1.id)) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${ttt1.user.username}** • ¡Debes esperar tu turno!`
    }}).then((m) => m.delete({ timeout: 5000 }))
					line1.splice(2, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle(`Te toca ${ttt1.user.username} » :o:`))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle(`¡Ha ganado ${ttt0.username}! <a:confetti:910757409520250900>`)) && msg.reactions.removeAll();

				}else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === r.users.remove(ttt0)).map(p => p.id).includes(ttt0.id)) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${ttt0.username}** • ¡Debes esperar tu turno!`
    }}).then((m) => m.delete({ timeout: 5000 }))
					line1.splice(2, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle(`Te toca ${ttt0.username} » :x:`))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle(`¡Ha ganado ${ttt1.user.username}! <a:confetti:910757409520250900>`)) && msg.reactions.removeAll();

				}
			}) 
  
/*LINEA 3-1*/abajo.on("collect", async function(r) {
				if(turn === 0){
					if(r.users.cache.sort(m => m.bot === r.users.remove(ttt1)).map(p => p.id).includes(ttt1.id)) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${ttt1.user.username}** • ¡Debes esperar tu turno!`
    }}).then((m) => m.delete({ timeout: 5000 }))
					line3.splice(1, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle(`Te toca ${ttt1.user.username} » :o:`))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle(`¡Ha ganado ${ttt0.username}! <a:confetti:910757409520250900>`)) && msg.reactions.removeAll();

				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === r.users.remove(ttt0)).map(p => p.id).includes(ttt0.id)) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${ttt0.username}** • ¡Debes esperar tu turno!`
    }}).then((m) => m.delete({ timeout: 5000 }))
					line3.splice(1, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle(`Te toca ${ttt0.username} » :x:`))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle(`¡Ha ganado ${ttt1.user.username}! <a:confetti:910757409520250900>`)) && msg.reactions.removeAll();

				}
			})

/*LINEA 3-2*/abajoderecha.on("collect", async function(r) {
                if(turn === 0){
					if(r.users.cache.sort(m => m.bot === r.users.remove(ttt1)).map(p => p.id).includes(ttt1.id)) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${ttt1.user.username}** • ¡Debes esperar tu turno!`
    }}).then((m) => m.delete({ timeout: 5000 }))
					line3.splice(2, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle(`Te toca ${ttt1.user.username} » :o:`))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle(`¡Ha ganado ${ttt0.username}! <a:confetti:910757409520250900>`)) && msg.reactions.removeAll();

				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === r.users.remove(ttt0)).map(p => p.id).includes(ttt0.id)) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${ttt0.username}** • ¡Debes esperar tu turno!`
    }}).then((m) => m.delete({ timeout: 5000 }))
					line3.splice(2, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle(`Te toca ${ttt0.username} » :x:`))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle(`¡Ha ganado ${ttt1.user.username}! <a:confetti:910757409520250900>`)) && msg.reactions.removeAll();

				}
			})

/*LINEA 2-2*/derecha.on("collect", async function(r) {
                if(turn === 0){
					if(r.users.cache.sort(m => m.bot === r.users.remove(ttt1)).map(p => p.id).includes(ttt1.id)) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${ttt1.user.username}** • ¡Debes esperar tu turno!`
    }}).then((m) => m.delete({ timeout: 5000 }))
					line2.splice(2, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle(`Te toca ${ttt1.user.username} » :o:`))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle(`¡Ha ganado ${ttt0.user.username}! <a:confetti:910757409520250900>`)) && msg.reactions.removeAll();

				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === r.users.remove(ttt0)).map(p => p.id).includes(ttt0.id)) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${ttt0.username}** • ¡Debes esperar tu turno!`
    }}).then((m) => m.delete({ timeout: 5000 }))
					line2.splice(2, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle(`Te toca ${ttt0.username} » :x:`))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle(`¡Ha ganado ${ttt1.user.username}! <a:confetti:910757409520250900>`)) && msg.reactions.removeAll();

				}
			})

/*LINEA 2-0*/izquierda.on("collect", async function(r) {
                if(turn === 0){
					if(r.users.cache.sort(m => m.bot === r.users.remove(ttt1)).map(p => p.id).includes(ttt1.id)) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${ttt1.user.username}** • ¡Debes esperar tu turno!`
    }}).then((m) => m.delete({ timeout: 5000 }))
					line2.splice(0, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle(`Te toca ${ttt1.user.username} » :o:`))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle(`¡Ha ganado ${ttt0.username}! <a:confetti:910757409520250900>`)) && msg.reactions.removeAll();

				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === r.users.remove(ttt0)).map(p => p.id).includes(ttt0.id)) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${ttt0.username}** • ¡Debes esperar tu turno!`
    }}).then((m) => m.delete({ timeout: 5000 }))
					line2.splice(0, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle(`Te toca ${ttt0.username} » :x:`))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle(`¡Ha ganado ${ttt1.user.username}! <a:confetti:910757409520250900>`)) && msg.reactions.removeAll();
					
				}
			})

/*LINEA 2-1*/centro.on("collect", async function(r) {
	             
                if(turn === 0){
					if(r.users.cache.sort(m => m.bot === r.users.remove(ttt1)).map(p => p.id).includes(ttt1.id)) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${ttt1.user.username}** • ¡Debes esperar tu turno!`
    }}).then((m) => m.delete({ timeout: 5000 }))
					line2.splice(1, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle(`Te toca ${ttt1.user.username} » :o:`))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle(`¡Ha ganado ${ttt0.username}! <a:confetti:910757409520250900>`)) && msg.reactions.removeAll();

				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === r.users.remove(ttt0)).map(p => p.id).includes(ttt0.id)) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **${ttt0.username}** • ¡Debes esperar tu turno!`
    }}).then((m) => m.delete({ timeout: 5000 }))
					line2.splice(1, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle(`Te toca ${ttt0.username} » :x:`))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle(`¡Ha ganado ${ttt1.user.username}! <a:confetti:910757409520250900>`)) && msg.reactions.removeAll();
              }
 })
         })
				}	
			}
			})
	

    }
}
