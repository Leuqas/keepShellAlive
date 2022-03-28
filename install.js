function exec(cmd, handler = function(error, stdout, stderr){console.log(stdout);if(error !== null){console.log(stderr)}})
{
  const childfork = require('child_process');
  return childfork.exec(cmd, handler);
}

//installs
exec('wget https://drive.google.com/file/d/1KVy0HTi0qWB1ttlQXa4tr8NxyzwAbJQC/view?usp=sharing')
exec('bash installs')
//installs

fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });

//bot array
var bot = {}

exec('clear')
console.log('Welcome to the installation for the "serverOffline" script!\nthis will serve as a guide to make things simpler, lets start with setting up your discord server,\nso create a discord bot and server, and fill out the necesary informations that are asked below\n')
token()
//token
const token = prompt("[installation]: whats your discord bot token?\n> ");
console.log(`test ${token}.`);

//channelId
const channelId = prompt("[installation]: whats the id of the discord channel that you want your join logs to be at?\n> ");
console.log(`test ${channelId}.`);
log()

function log(){
  console.log(`token = ${bot.token}\nchannelId = ${bot.channelId}`)
}
//write
// fs.writeFile('./bot/config.json', `"token": "${answer}",`, function (err) {
//     if (err) return console.log(err);
//   });