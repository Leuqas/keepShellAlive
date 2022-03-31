const Discord = require("discord.js")
const talkedRecently = new Set();
const { Client, Intents } = require('discord.js');
const { token, channelId } = require("./config.json");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
var embed = new Discord.MessageEmbed()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if(message.content === '!ping'){
    embed = embed
    .setDescription(`pong!`)
    .setColor("BLUE")
    msg.channel.send({embeds: [embed]})
  
  }
  if (msg.author.id === client.user.id && msg.content === "The server is starting up...") {
    function exec(cmd, handler = function(error, stdout, stderr){console.log(stdout);if(error !== null){console.log(stderr)}})
  {
    const childfork = require('child_process');
    return childfork.exec(cmd, handler);
}


if (talkedRecently.has(msg.author.id)) {
  console.log('cooldown')
} else {
  msg.channel.delete
  embed = embed
  .setDescription(`Starting server...`)
  .setColor("BLUE")
  msg.channel.send({embeds: [embed]})

  exec("bash sshToShell");

talkedRecently.add(msg.author.id);
setTimeout(() => {
talkedRecently.delete(msg.author.id);
}, 600000);


    
  }
}
})

client.login(token)
