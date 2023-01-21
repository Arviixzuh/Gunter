const Discord = require("discord.js");
module.exports = {
  name: "unban",
  alias: [],

  async execute(client, message, args) {

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tienes permisos para usar este comando!`
      }
    });

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡No tengo permisos para ejecutar este comando!`
      }
    });

    let userID = args[0]
    if (!userID) return message.channel.send({
      embed: {
        color: 15158332,
        description: `<a:alert:907348214036983869> **Error** • ¡Debes escibir una ID valida.`
      }
    });

    message.guild.fetchBans().then(async bans => {
      if (bans.size == 0) return message.channel.send({
        embed: {
          color: 15158332,
          description: `<a:alert:907348214036983869> **Error** • ¡No hay ningun ban registrado en este servidor!`
        }
      });

      let unbanuser = bans.find(b => b.user.id == userID)
      if (!unbanuser) return message.channel.send({
        embed: {
          color: 15158332,
          description: `<a:alert:907348214036983869> **Error** • ¡La ID mencionada no se encuentra en la lista!`
        }
      });

      try {
        message.guild.members.unban(unbanuser.user)
        const embed = new Discord.MessageEmbed()
          .setDescription(`<a:check:907350759782350918> • **¡El usuario <@${userID}> fue desbaneado correctamente!**`)
          .setColor("GREEN")
        message.channel.send(embed)
      } catch (error) {
        await message.channel.send({
          embed: {
            color: 15158332,
            description: `<a:alert:907348214036983869> • ¡Parece que ha ocurrido un error inesperado!`
          }
        })
      }
    }
    )
  }
}