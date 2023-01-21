const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const akinator = require("mech-aki");
const cooldown = new Set();

module.exports = {
  name: "akinator",
  alias: ["aki"],

  async execute(client, message, args, prefix) {

    if (cooldown.has(message.author.id))
      return message.channel.send({
        embed: {
          color: 15158332,
          description: `<a:time:918292719598710834> **${message.author.username}** • ¡Debes esperar **10 segundos** antes de volver a usar este comando!`
        }
      }).then(m => m.delete({ timeout: 10000 }));

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, 10000);

    if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tengo permisos para ejecutar este comando!`
      }
    });

    const carga = new Discord.MessageEmbed()

      .setDescription("<a:loading2:917909256508956694> • **¡Iniciando Akinator!**")
      .setColor("835aa2")

    message.channel.send(carga).then(m => m.delete({ timeout: 3000 }));

    const cargando = new Discord.MessageEmbed()

      .setDescription("<a:loading:908139972161323079> • **Espera mientras cargan las reacciones...**")
      .setColor("835aa2")

    const fin = new Discord.MessageEmbed()

      .setThumbnail(`https://cdn.discordapp.com/attachments/909121957562314803/915315637071519744/akinator.png`)
      .setDescription(`<a:error:909528174063415307> **¡Juego Finalizado!**\n\n> • ¡Se ha cancelado el juego por limite de tiempo!\n> • Utiliza \`${prefix}akinator\` para jugar otra vez`)
      .setColor("RED")

    const embed = new Discord.MessageEmbed().setColor("835aa2");

    var aki = new akinator("es")
    var pregunta = await aki.empezar();
    embed.setAuthor(pregunta.pregunta);
    embed.setThumbnail(`https://cdn.discordapp.com/attachments/909121957562314803/915315637071519744/akinator.png`);

    var respuestas = new Map([
      ["✅", 0],
      ["❌", 1],
      ["❓", 2],
      ["🤔", 3],
      ["😞", 4]
    ]);

    var respuestasxd = ["✅", "❌", "❓", "🤔", "😞"];

    embed.addField(
      "Opciones",
      `✅ • Sí\n❌ • No\n❓ • No lo sé\n🤔 • Probablemente sí\n😞 • Probablemente no`,
      false
    );

    var msg = await message.reply(cargando);
    msg.react('✅')
    msg.react('❌')
    msg.react('❓')
    msg.react('🤔')
    msg.react('😞').then(m => {
      msg.edit(embed)
    });
    while (aki.progreso < 85) {
      //console.log(aki.progreso);
      var respuesta = await new Promise((resolve, reject) => {
        var collector = msg.createReactionCollector(
          (reaction, user) =>
            !user.bot &&
            user.id === message.author.id &&
            reaction.message.channel.id === msg.channel.id &&
            reaction.users.remove(message.author.id).catch(error => { return; }),

          { time: 120000 }
        );
        collector.on("collect", r => {
          resolve(r.emoji.name);
          collector.stop();
        });
        collector.on("end", collected => resolve(null));
      });
      if (!respuesta) return msg.edit(fin) && msg.reactions.removeAll();
      var respuesta_num = respuestas.get(respuesta);
      pregunta =
        respuesta_num != -9
          ? await aki.siguiente(respuesta_num)
          : await aki.atras();
      embed.setAuthor(pregunta.pregunta);
      await msg.edit(embed);
    }

    var personajes = await aki.respuestas();
    embed.setAuthor("Tu personaje es: " + personajes[0].nombre);
    embed.setThumbnail(`https://cdn.discordapp.com/attachments/909121957562314803/915315637071519744/akinator.png`);
    embed.setDescription(personajes[0].descripcion);
    embed.setImage(personajes[0].foto);
    embed.fields = [];
    msg.delete();
    message.reply(embed);

  }
}