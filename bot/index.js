const Discord = require("discord.js")
const talkedRecently = new Set();
const { Client, Intents } = require('discord.js');
const { token, channelId, botId } = require("./config.json");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.author.id === botId && msg.content === "The server is offline, please rejoin after 1 - 3 minutes, starting up the server...") {
    function exec(cmd, handler = function(error, stdout, stderr){console.log(stdout);if(error !== null){console.log(stderr)}})
  {
    const childfork = require('child_process');
    return childfork.exec(cmd, handler);
}


if (talkedRecently.has(msg.author.id)) {
  msg.channel.send("cooooooooooooldown");
} else {

  msg.channel.send('timeout is workign')  
  exec("bash ../sshToShell");

talkedRecently.add(msg.author.id);
setTimeout(() => {
talkedRecently.delete(msg.author.id);
}, 600000);


    
  }
}
})

client.login(token)
