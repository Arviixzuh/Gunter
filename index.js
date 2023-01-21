const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client();
const mongoose = require("mongoose");
const prefix = require('./mongo-db/schemaPrefix');
const express = require("express")().get("/", (req, res) => res.send("Conectado correctamente a Express.")).listen(3000)
const keepAlive = require("./server.js")
client.commands = new Discord.Collection();
require("dotenv").config;

const fs = require('fs')
let { readdirSync } = require('fs')

//========//========[>-----------------<]========\\========\\
//========//========[> Command Handler <]========\\========\\
//========//========[>-----------------<]========\\========\\

const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));
const commandModeracion = fs.readdirSync('./comandos/moderacion').filter(file => file.endsWith('.js'));
const commandInformacion = fs.readdirSync('./comandos/informacion').filter(file => file.endsWith('.js'));
const commandJuegos = fs.readdirSync('./comandos/juegos').filter(file => file.endsWith('.js'));
const commandDiversion = fs.readdirSync('./comandos/diversion').filter(file => file.endsWith('.js'));
const commandConfiguracion = fs.readdirSync('./comandos/configuracion').filter(file => file.endsWith('.js'));
const commandUtiles = fs.readdirSync('./comandos/utiles').filter(file => file.endsWith('.js'));
const commandNsfw = fs.readdirSync('./comandos/nsfw').filter(file => file.endsWith('.js'));
const commandInteraccion = fs.readdirSync('./comandos/interaccion').filter(file => file.endsWith('.js'));
const commandMusica = fs.readdirSync('./comandos/musica').filter(file => file.endsWith('.js'));
const commandImagenes = fs.readdirSync('./comandos/imagenes').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}

for (const file of commandModeracion) {
  const command = require(`./comandos/moderacion/${file}`);
  client.commands.set(command.name, command);
}

for (const file of commandInformacion) {
  const command = require(`./comandos/informacion/${file}`);
  client.commands.set(command.name, command);
}

for (const file of commandJuegos) {
  const command = require(`./comandos/juegos/${file}`);
  client.commands.set(command.name, command);
}

for (const file of commandDiversion) {
  const command = require(`./comandos/diversion/${file}`);
  client.commands.set(command.name, command);
}

for (const file of commandConfiguracion) {
  const command = require(`./comandos/configuracion/${file}`);
  client.commands.set(command.name, command);
}

for (const file of commandUtiles) {
  const command = require(`./comandos/utiles/${file}`);
  client.commands.set(command.name, command);
}

for (const file of commandNsfw) {
  const command = require(`./comandos/nsfw/${file}`);
  client.commands.set(command.name, command);
}

for (const file of commandInteraccion) {
  const command = require(`./comandos/interaccion/${file}`);
  client.commands.set(command.name, command);
}

for (const file of commandMusica) {
  const command = require(`./comandos/musica/${file}`);
  client.commands.set(command.name, command);
}

for (const file of commandImagenes) {
  const command = require(`./comandos/imagenes/${file}`);
  client.commands.set(command.name, command);
}

for (const file of readdirSync('./eventos')) {
  if (file.endsWith('.js')) {
    let fileName = file.substring(0, file.length - 3)
    let fileContents = require(`./eventos/${file}`)
    client.on(fileName, fileContents.bind(null, client))
  }
}

//========//========[>---------<]========\\========\\
//========//========[> Eventos <]========\\========\\
//========//========[>---------<]========\\========\\


process.on('unhandledRejection', error => {
  return;
});

client.snipes = new Map()

client.on('messageDelete', message => {
  client.snipes.set(message.channel.id, {
    content: message.content,
    delete: message.author,
    canal: message.channel
  })
});

function presence() {
  client.user.setPresence({
    status: "dnd",
    activity: {
      name: "gu!help",
      type: "PLAYING"
    }
  })
}
client.on("ready", () => {
  console.log("¡Hola mundo!");
  presence();
});

mongoose.connect("MongoDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Conectado correctamente a MongoDB.")
}).catch(() => {
  console.log("Ocurrió un error al conectarse a MongoDB")
})

//========//========[>--------<]========\\========\\
//========//========[> Prefix <]========\\========\\
//========//========[>--------<]========\\========\\

client.on('message', async message => {
  if (message.channel.type === 'dm') return;

  const data = await prefix.findOne({
    Server: message.guild.id
  })

  if (data) {

    const prefix = data.Prefix;

    if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
      const embed = new Discord.MessageEmbed()
        .setDescription(`<:feli:907372924372140044> ¡Hola! soy **Gunter**, mi prefix en este servidor es \`${prefix}\`
Puedes utilizar el comando \`${prefix}help\` para ver mi lista de comandos.`)
        .setColor("835aa2")
      message.channel.send(embed)
    }

    if (!message.guild.me.permissionsIn(message.channel).has('VIEW_CHANNEL')) return;
    if (!message.guild.me.permissionsIn(message.channel).has('SEND_MESSAGES')) return;

    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    if (!message) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (!command.length) return;

    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));

    if (cmd) {
      cmd.execute(client, message, args, prefix)
    }
    if (!cmd) {
      const embed = new Discord.MessageEmbed()
        .setTitle("<a:alert:907348214036983869> ¡Comando no encontrado!")
        .setDescription(`El comando \`${command}\` no existe\nUtiliza • \`${prefix}help\` para ver la lista de comandos`)
        .setColor("RED")
      message.channel.send(embed)
    }

  } else if (!data) {
    const prefix = 'gu!'

    if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
      const embed = new Discord.MessageEmbed()
        .setDescription(`<:feli:907372924372140044> ¡Hola! soy **Gunter**, mi prefix en este servidor es \`${prefix}\`
  Puedes utilizar el comando \`${prefix}help\` para ver mi lista de comandos.`)
        .setColor("835aa2")
      message.channel.send(embed)
    }

    if (!message.guild.me.permissionsIn(message.channel).has('VIEW_CHANNEL')) return;
    if (!message.guild.me.permissionsIn(message.channel).has('SEND_MESSAGES')) return;

    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    if (!message) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (!command.length) return;

    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));

    if (cmd) {
      cmd.execute(client, message, args, prefix)
    }
    if (!cmd) {
      const embed = new Discord.MessageEmbed()
        .setTitle("<a:alert:907348214036983869> ¡Comando no encontrado!")
        .setDescription(`El comando \`${command}\` no existe\nUtiliza • \`${prefix}help\` para ver la lista de comandos`)
        .setColor("RED")

      message.channel.send(embed)
    }
  }

});

//========//========[>--------<]========\\========\\
//========//========[> Musica <]========\\========\\
//========//========[>--------<]========\\========\\

const Distube = require('distube');
const { channel } = require('diagnostics_channel');


client.distube = new Distube(client, {
  emitNewSongonly: true,
  serachSongs: false,
  leaveOnStop: true,
  leaveOnFinish: false,
  leaveOnEmpty: true

});

client.distube.on("addList", (message, queue, playList) => {
  const embed = new Discord.MessageEmbed()
    .setTitle("<a:disco:913640838884655134> Playlist añadida")
    .setDescription(playlist.name)
    .setColor("835aa2")
  message.channel.send(embed)

})

client.distube.on("addSong", (message, queue, song) => {
  const embed = new Discord.MessageEmbed()
    .setTitle("<a:disco:913640838884655134> Canción añadida")
    .setDescription(`[${song.name}](${song.url})`)
    .addField("Autor", `${message.author}`, true)
    .addField("Duración", `\`${song.formattedDuration}\``, true)
    .setColor("835aa2")
  message.channel.send(embed)
})

client.distube.on("playSong", (message, queue, playsong) => {
  const embed = new Discord.MessageEmbed()
    .setThumbnail(playsong.thumbnail)
    .setTitle("<a:disco:913640838884655134> Reproduciendo ahora")
    .setDescription(`[${playsong.name}](${playsong.url})`)
    .addField("Autor", `${message.author}`, true)
    .addField("Duración", `\`${playsong.formattedDuration}\``, true)
    .setColor("835aa2")
  message.channel.send(embed)
})

client.distube.on("playList", (message, queue, playlist) => {
  const embed = new Discord.MessageEmbed()
    .setThumbnail(playlist.thumbnail)
    .setTitle("<a:disco:913640838884655134> Reproduciendo playlist")
    .setDescription(`[${playlist.name}](${playlist.url})`)
    .setColor("835aa2")
  message.channel.send(embed)
})

client.distube.on("empty", (message, queue, playlist) => {
  const embed = new Discord.MessageEmbed()
    .setDescription(`El canal de musica está vacío... Me tengo que ir 👋`)
    .setColor("835aa2")
  message.channel.send(embed)
})

client.distube.on("error", (error) => console.log(error))

//========//========[>---------<]========\\========\\
//========//========[> Cliente <]========\\========\\
//========//========[>---------<]========\\========\\

client.login(config.token)//^^