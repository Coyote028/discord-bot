const Discord = require('discord.js');

const { prefix, token } = require('./config.json');


const client = new Discord.Client();

client.once('ready', () => {
console.log('Ready!');
});

client.on('message', (message) => {
if (message.content === '!djoe') {
    message.channel.send('tu veux quoi djoe');
}
});

client.login('ODUyMjU0NTA1NzY4MTkwMDEy.YMEJ3A.jjzmZa3jN6dJXhFY7Mktz7I2j50')

