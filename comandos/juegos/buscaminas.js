const Discord = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "buscaminas",
    alias: [""], 

    execute (client, message, args) {

      var rpts = [`||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:one:||||:one:||||:one:||\n||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:one:||||:bomb:||||:one:||\n||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:one:||||:one:||||:one:||\n||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||\n||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||\n||:one:||||:two:||||:three:||||:two:||||:one:||||:zero:||||:one:||||:one:||||:one:||\n||:two:||||:bomb:||||:bomb:||||:bomb:||||:two:||||:zero:||||:two:||||:bomb:||||:two:||\n||:bomb:||||:three:||||:four:||||:bomb:||||:two:||||:zero:||||:three:||||:bomb:||||:four:||\n||:one:||||:one:||||:one:||||:one:||||:one:||||:zero:||||:two:||||:bomb:||||:bomb:||`,`||:one:||||:bomb:||||:one:||||:zero:||||:one:||||:one:||||:two:||||:bomb:||||:one:||\n||:one:||||:one:||||:one:||||:zero:||||:one:||||:bomb:||||:two:||||:one:||||:one:||\n||:zero:||||:zero:||||:zero:||||:zero:||||:two:||||:two:||||:two:||||:zero:||||:zero:||\n||:zero:||||:zero:||||:zero:||||:zero:||||:one:||||:bomb:||||:one:||||:zero:||||:zero:||\n||:zero:||||:zero:||||:zero:||||:zero:||||:one:||||:one:||||:one:||||:zero:||||:zero:||\n||:one:||||:one:||||:zero:||||:zero:||||:zero:||||:zero:||||:one:||||:one:||||:one:||\n||:bomb:||||:two:||||:two:||||:two:||||:one:||||:one:||||:two:||||:bomb:||||:one:||\n||:one:||||:two:||||:bomb:||||:bomb:||||:two:||||:two:||||:bomb:||||:two:||||:one:||\n||:zero:||||:one:||||:two:||||:three:||||:bomb:||||:two:||||:one:||||:one:||||:zero:||\n`,`||:bomb:||||:one:||||:zero:||||:zero:||||:zero:||||:one:||||:one:||||:one:||||:zero:||\n||:one:||||:one:||||:zero:||||:zero:||||:zero:||||:one:||||:bomb:||||:one:||||:zero:||\n||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:one:||||:one:||||:one:||||:zero:||\n||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||\n||:one:||||:two:||||:three:||||:three:||||:two:||||:one:||||:zero:||||:one:||||:one:||\n||:one:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:three:||||:two:||||:two:||||:bomb:||\n||:one:||||:two:||||:three:||||:three:||||:three:||||:bomb:||||:bomb:||||:two:||||:one:||\n||:one:||||:one:||||:zero:||||:zero:||||:one:||||:two:||||:two:||||:one:||||:zero:||\n||:bomb:||||:one:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||\n`];

      const embed = new Discord.MessageEmbed()

      .setTitle("¡Buscaminas!")
      .setColor("835aa2")
      .setThumbnail(`https://www.reviversoft.com/blog/wp-content/uploads/2013/03/Minesweeper_Icon.png`) 
      .setDescription(`¡Si desbloqueas una mina... pierdes!\n\n${rpts[Math.floor(Math.random() * rpts.length)]}`)
      .setFooter(`Solicitado por • ${message.author.username}`)

      message.channel.send(embed)


    }
}