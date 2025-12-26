const Discord = require('discord.js');
const client = new Discord.Client({ intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES
]});
require('dotenv').config();

const PREFIX = process.env.PREFIX;

client.once('ready', () => {
    console.log(`Bot działa jako ${client.user.tag}`);
    client.user.setActivity('🌿 Chill & 420', { type: 'WATCHING' });
    client.user.setStatus('online');
});

client.on('messageCreate', async message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping') message.reply('Pong!');
    // Tutaj dodasz komendy typu boostrole, mute, kick, ban itd.
});

client.login(process.env.TOKEN);
