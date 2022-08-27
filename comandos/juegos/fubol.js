const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');
const cooldown = new Set();

module.exports = {
    name: "fubol",
    alias: ["futbol"], 

    async execute (client, message, args) {

      //Establecemos un cooldown de 5 segundos

        if(cooldown.has(message.author.id))
        return message.channel.send({embed: {
      color: 15158332,
      description: `<a:time:918292719598710834> **${message.author.username}** • ¡Debes esperar **5 segundos** antes de volver a usar este comando!`
    }}).then(m => m.delete({timeout: 5000}));

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, 5000);

      //Establecemos los mensajes random

      var izquierda = [`__**¡Lo siento, Perdiste!**__ 😢\n\nㅤㅤ🥅🥅🥅\nㅤㅤ🏃\nㅤㅤ⚽`, `__**¡Felicidades, Ganaste!**__ 🏆\n\nㅤㅤ🥅🥅🥅\nㅤㅤ⚽🏃\n\n`];
      var centro = [`__**¡Lo siento, Perdiste!**__ 😢\n\nㅤㅤ🥅🥅🥅\nㅤㅤㅤㅤ🏃\nㅤㅤㅤㅤ⚽`, `__**¡Felicidades, Ganaste!**__ 🏆\n\nㅤㅤ🥅🥅🥅\nㅤㅤㅤ⚽🏃`];
      var derecha = [`__**¡Lo siento, Perdiste!**__ 😢\n\nㅤㅤ🥅🥅🥅\nㅤㅤㅤㅤㅤ🏃\nㅤㅤㅤㅤㅤ⚽`, `__**¡Felicidades, Ganaste!**__ 🏆\n\nㅤㅤ🥅🥅🥅\nㅤㅤ🏃ㅤ⚽`];

      //Establecemos el mensaje de limite de tiempo (fin)

      const fin = new Discord.MessageEmbed()
      .setDescription(`__**¡Tiempo limite alcanzado!**__\n\nㅤㅤ🥅🥅🥅\nㅤㅤㅤ🛌ㅤ⚽`)
      .setColor("835aa2")
      .setFooter(`¡El partido ha finalizado!`)

      //Establecemos el mensaje inicial (fubol)

      const fubol = new Discord.MessageEmbed()
      .setDescription(`__**¡Tienes 30 Segundos!**__ ⌛\n\nㅤㅤ🥅🥅🥅\nㅤㅤㅤ🏋️\n\nㅤㅤㅤ⚽`)
      .setColor("835aa2")
      .setFooter(`🔹 ${message.author.username} vs Gunter 🔸`)

      // Establecemos las reacciones/emojis en el mensaje

      message.channel.send(fubol).then(msg => {
        
      msg.react('915771032583954492')//izquierda
      msg.react('915771061394636871')//centro
      msg.react('915771002514989167')//derecha

    // Creamos un filtro para que solo se pueda reaccionar a los emojis establecidos.
    const filter = (reaction, user) => {
      return ['915771032583954492', '915771061394636871', '915771002514989167'].includes(reaction.emoji.id) 
                && user.id == message.author.id;
    };

        msg.awaitReactions(filter, { max: 1, time: 30000 })
        .then(collection => {

          const reaction = collection.first();

          //Creamos una condicional para que edite el mensaje (fubol) por (fin) y elimite las reacciones.
          
      if (!reaction) return msg.edit(fin) && msg.reactions.removeAll();

          

                if(reaction.emoji.id === '915771032583954492'){
                  msg.edit(fubol.setDescription(`${(izquierda[Math.floor(Math.random() * izquierda.length)])}`)) && msg.edit(fubol.setFooter("¡El partido ha finalizado!")) && msg.reactions.removeAll();
                  
                }
                if(reaction.emoji.id === '915771061394636871'){
                  msg.edit(fubol.setDescription(`${(centro[Math.floor(Math.random() * centro.length)])}`)) && msg.edit(fubol.setFooter("¡El partido ha finalizado!")) && msg.reactions.removeAll();

                }
                if(reaction.emoji.id === '915771002514989167'){
                  msg.edit(fubol.setDescription(`${(derecha[Math.floor(Math.random() * derecha.length)])}`)) && msg.edit(fubol.setFooter("¡El partido ha finalizado!")) && msg.reactions.removeAll();
                }

              })
        })
    }
            

    }

//Hecho por Arviixzuh_
