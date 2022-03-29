function exec(cmd, handler = function(error, stdout, stderr){console.log(stdout);if(error !== null){console.log(stderr)}})
{
  const childfork = require('child_process');
  return childfork.exec(cmd, handler);
}


fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });

//bot array

exec('clear')
console.log('Welcome to the installation for the keepShellOnline script by Leuqas#5769!\nthis will make the installation a little bit simpler than manualy entering your values to each file,\nlets start with setting up your discord server, so create a discord bot and server, then fill out the necesary informations that are asked below\n')


const token = prompt("[Installation]: Whats your discord bot token?\n> ");
const channelId = prompt("[Installation]: Whats the id of the discord channel that you want your join logs to be at?\n> ");
const channelName = prompt('[Installation]: Whats the name of that specified channel?\n> ')

// write

// bot config
  fs.writeFile('./config.json', `
  {
    "token": "${token}",
    "channelId": "${channelId}"
  }
  `, function (err) {
      if (err) return console.log(err);
    });
  

// discord srv config
  fs.writeFile('./plugins/DiscordSRV/config.yml', `
  ConfigVersion: 1.25.0

  BotToken: "${token}"

  Channels: {"${channelName}": "${channelId}"}
  
  `, function (err) {
      if (err) return console.log(err);
    });
