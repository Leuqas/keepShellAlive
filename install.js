function exec(cmd, handler = function(error, stdout, stderr){console.log(stdout);if(error !== null){console.log(stderr)}})
{
  const childfork = require('child_process');
  return childfork.exec(cmd, handler);
}

//installs

//installs

fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });

//bot array

exec('clear')
console.log('Welcome to the installation for the "serverOffline" script!\nthis will serve as a guide to make things simpler, lets start with setting up your discord server,\nso create a discord bot and server, and fill out the necesary informations that are asked below\n')


const token = prompt("[Installation]: Whats your discord bot token?\n> ");

const channelId = prompt("[Installation]: Whats the id of the discord channel that you want your join logs to be at?\n> ");

const channelName = prompt('[Installation]: Whats the name of that specified channel?\n> ')


function log(){
  console.log(`token = ${token}\nchannelId = ${channelId}`)
}
//write

//bot config
fs.writeFile('./bot/config.json', `
{
  "token": "${token}",
  "channelId": "${channelId}"
}
`, function (err) {
    if (err) return console.log(err);
  });
  

//discord srv config
  fs.writeFile('./server/plugins/DiscordSRV/config.yml', `
  ConfigVersion: 1.25.0

  BotToken: "${token}"

  Channels: {"${channelName}": "${channelId}"}
  
  `, function (err) {
      if (err) return console.log(err);
    });