const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');
const math = require("math-expression-evaluator"); 

module.exports = {
    name: "calc",
    alias: ["calculadora"], 

    execute (client, message, args) {
  
  if (!args[0]) return message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **Error** • ¡Debes colocar una equación!`
    }})


  try {
  const resultado = math.eval(args.join(" "))

      const embed = new Discord.MessageEmbed()

  .setThumbnail("https://cdn.discordapp.com/attachments/909121957562314803/911057601926684682/31QYTepQomL.png")
  .setTitle("Calculadora")
  .addField("Entrada", `\`\`\`js\n${args.join(" ")}\`\`\``, false)
  .addField("Salida", `\`\`\`js\n${resultado}\`\`\``, false)
  .setColor("835aa2")

  return message.channel.send(embed);
} catch (e) {

  message.channel.send({embed: {
      color: 15158332,
      description: `<a:alert:907348214036983869> **Error** • ¡Equación invalida!`
    }})

}
    }
}

//<a:entrada:913874121409044502>
//<a:salida:913874189788782682> 