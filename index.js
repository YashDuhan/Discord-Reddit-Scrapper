const Discord = require('discord.js');
const api = require("imageapi.js");
const client = new Discord.Client();

client.on('ready', () =>{
    console.log('MemeBot is online');
    bot.user.setActivity('Yash', {type: 'LISTENING'}).catch(console.error);
})

client.on('message', async msg => {
  if (msg.content === 'f.meme') {
    let subreddits = [
      "memes"
    ];
    let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))];
    let img = await api(subreddit)
    const Embed = new Discord.MessageEmbed()
    .setTitle(`A meme from r/meme`)
    .setURL(`https://www.reddit.com/r/meme/`)
    .setColor('RANDOM')
    .setImage(img)
    msg.channel.send(Embed)
  }
});

client.login('token');