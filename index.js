/* Yes I know this is very ugly and underdeveloped coding
*  can't say much more than sHUT tHE HECK UP this is my first time coding 
*  fucking hell coding is the hardest thing 
*  i did heavily reference off other open-sourced discord.js bots.
*/
//botURL = https://discordapp.com/api/oauth2/authorize?client_id=329722471295221760&scope=bot&permissions=2083912831 
const Discord = require("discord.js");
const client = new Discord.Client();
var schedule = require('node-schedule');
const auth = require("./auth.json");
const prefix = '--'
const ownerId = '174627027956137985'

client.login(process.env.TOKEN);

console.log('Starting Big Ben!')
//ready and game status, message ready to main server
client.on("ready", () => {
  var channel = client.channels.get('198399488614727680');
  console.log(`Ben is ready boss, bonging in ${client.guilds.size} guilds. `);
  client.consts = require('./consts.js');
  client.user.setPresence({ game: { name: '--help', type: 0 } });
  channel.send(`Big Ben is up and running!`);
});

//message and update when Ben joins or leaves a server
client.on('guildCreate', guild =>{
	var channel = client.channels.get('198399488614727680')
		channel.send(`Ben was added to ${guild.name}, it has a total of ${guild.members.size} members, and ${guild.channels.size} channels. It is owned by ${guild.owner.user}. (ID: ${guild.id})`)
});
client.on('guildDelete', guild =>{
	var channel = client.channels.get('198399488614727680')
		channel.send(`Ben was removed from ${guild.name}, it has a total of ${guild.members.size} members, and ${guild.channels.size} channels. It is owned by ${guild.owner.user}. (ID: ${guild.id})`)
});

//message replies, commands, and announcements
client.on("message", message => {
	var feeshmain = client.channels.get('323639445842558977');//feeshworld generoll channel
	if(message.author.bot)return;
	if(message.content.startsWith('//') && message.guild.id == '198399488614727680')return message.react('🙊');
	if(message.content.startsWith(prefix))return;
		try {
			if(message.content.includes('press f')){
				message.react('🇫');
			};
			if(message.content == '<@329722471295221760> help') {
				const embed = new Discord.RichEmbed()
					.setAuthor(`BigBen`, client.user.displayAvatarURL)
    				.setColor('54719E')
       				.setThumbnail(client.user.displayAvatarURL)
				    .setFooter(`Any message from the me can be removed by reacting with a ⏲ emoji.`)
					.setDescription('Simple bot whose main functionality is to bong every hour in UTC!\n\*Annoying? Yes. Stupid? Definitely. Useful? Not so much.*')
				    .addField(`__This is a terrible bot:__`, `Me too thanks <:feelsOKmAng:342035709999448067>`, true)
        			.addField(`__Invite Me!:__`, `[Invite Link](https://discordapp.com/oauth2/authorize?client_id=329722471295221760&scope=bot&permissions=2083912831)`, true)
        			.addField(`__Commands:__`, `Use \`--commands\` to see a list of my commands.\n\You can also use \`--help [command]\` to get help on a specific command.`)
        			.addField(`__Support:__`, `Contact <@180050347589369856> for direct support.\n\Or use \`--support [message]\` to send a support message.`);
     			return message.channel.send({embed}).then(m=>m.react("⏲"))
			}
			if(message.content == '<@!329722471295221760> help') {
				const embed = new Discord.RichEmbed()
					.setAuthor(`BigBen`, client.user.displayAvatarURL)
    				.setColor('54719E')
       				.setThumbnail(client.user.displayAvatarURL)
				    .setFooter(`Any message from the me can be removed by reacting with a ⏲ emoji.`)
					.setDescription('Simple bot whose main functionality is to bong every hour in UTC!*Annoying? Yes. Stupid? Definitely. Useful? Not so much.*')
				    .addField(`__This is a terrible bot:__`, `Me too thanks <:feelsOKmAng:342035709999448067>`, true)
        			.addField(`__Invite Me!:__`, `[Invite Link](https://discordapp.com/oauth2/authorize?client_id=329722471295221760&scope=bot&permissions=2083912831)`, true)
        			.addField(`__Commands:__`, `Use \`--commands\` to see a list of my commands.\n\You can also use \`--help [command]\` to get help on a specific command.`)
        			.addField(`__Support:__`, `Contact <@180050347589369856> for direct support.\n\Or use \`--support [message]\` to send a support message.`);
     			return message.channel.send({embed}).then(m=>m.react("⏲"))
			}
				//vv announcements and insults, tied to homeguild
					if(message.channel.id =='335766194525044739') {;
						return feeshmain.send(message.content);
					}
					if(message.content.includes('<@329722471295221760>')) {
						return message.reply("bong?");
					};
					if(message.content.includes('<@!329722471295221760>')) {
						return message.reply("bong?");
					};
					if(message.content.includes('bong')){
						return message.reply("bong?");
					};
					if(message.content.includes('BONG')) {
						return message.reply('bong?')
					}
		} catch(err) {
			console.log(err)
		}
}); 	

//command handler
client.on("message", message => {
  const args = message.content.split(" "); 

  if (!message.content.startsWith(prefix)) return;

  //COMMAND Handler
  const org = args.shift().slice(prefix.length);
  const command = org.toLowerCase()

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, Discord, args);
  } catch (err) {
    return console.log(`${command} is not a valid command.`);
  }
});

//removes bot's message if reacted with timer
client.on("messageReactionAdd", (messageReaction, user) => {
	if(messageReaction.message.author.id !== '329722471295221760') return;
	if(user.bot) return;
	if(messageReaction.emoji == '⏲') {
        messageReaction.message.delete();
      }
})

//lmfao get ready boii here's the bongs
client.on('ready', () => {
	try{	
		var rule = new schedule.RecurrenceRule(); 
		rule.minute = 9; 
		rule.hour = 1; 
		var a = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG!***"));
		})
	  
	  rule.hour = 2; 
	
		var b = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG BONG!***"));
		})
	  rule.hour = 3; 
	
		var c = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG BONG BONG!***"));
		})
	
	  rule.hour = 4; 
	
		var d = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG BONG BONG BONG!***"));
		})
	
		rule.hour = 5; 
	
		var e = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG BONG BONG BONG BONG!***"));
		})
	
		rule.hour = 6; 
	
		var f = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG BONG BONG BONG BONG BONG!***"));
		})
	
		rule.hour = 7; 
	
		var g = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG BONG BONG BONG BONG BONG BONG!***"));
		})
	
		rule.hour = 8; 
	
		var g = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG BONG BONG BONG BONG BONG BONG BONG!***"));
		})
	
		rule.hour = 9; 
	
		var i = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG!***"));
		})
	
		rule.hour = 10; 
	
		var j = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG!***"));
		})
	
		rule.hour = 11; 
	
		var k = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG!***"));
		})
	
		rule.hour = 12; 
	
		var l = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG!***"));
		})
	
		rule.hour = 13; 
	
		var m = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG!***"));
		})
	
		rule.hour = 14; 
	
		var n = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG BONG!***"));
		})
	
		rule.hour = 15; 
	
		var o = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG BONG BONG!***"));
		})
	
		rule.hour = 16; 
	
		var p = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG BONG BONG BONG!***"));
		})
	
		rule.hour = 17; 
	
		var q = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG BONG BONG BONG BONG!***"));
		})
	
		rule.hour = 18; 
	
		var r = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG BONG BONG BONG BONG BONG!***"));
		})
	
		rule.hour = 19; 
	
		var s = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG BONG BONG BONG BONG BONG BONG!***"));
		})
	
		rule.hour = 20; 
	
		var t = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG BONG BONG BONG BONG BONG BONG BONG!***"));
		})
	
		rule.hour = 21; 
	
		var u = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG!***"));
		})
	
		rule.hour = 22; 
	
		var v = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG!***"));
		})
	
		rule.hour = 23; 
	
		var w = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG!***"));
		})
	
		rule.hour = 24; 
	
		var x = schedule.scheduleJob(rule, function() {
			client.guilds.map(guild => guild.defaultChannel.send("***BONG!***"));
		})
	} catch(err) {
		var channel = client.channels.get('198399488614727680')
		return channel.send("BONGS HECKING BROKE AAAGAIN FUCK!!!!!!!")
	}
});	