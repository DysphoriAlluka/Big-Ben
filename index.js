//botURL = https://discordapp.com/api/oauth2/authorize?client_id=329722471295221760&scope=bot&permissions=2083912831 
const Discord = require("discord.js");
const client = new Discord.Client();
var txtgen = require('txtgen');
var schedule = require('node-schedule');
const auth = require("./auth.json");
const notifyChannel = '198399488614727680'
const prefix = '--'
const ownerId = '180050347589369856'

client.login(process.env.TOKEN);

console.log('Starting Big Ben!')
//ready and game status, message ready to main server
client.on("ready", () => {
  var channel = client.channels.get(notifyChannel);
  console.log(`Ben is ready boss, bonging in ${client.guilds.size} guilds. `);
  client.consts = require('./consts.js');
  client.user.setGame("press '--f' to pay respects.");
  channel.send(`Big Ben is up and running!`);
});

//message and update when Ben joins or leaves a server
client.on('guildCreate', guild =>{
	var channel = client.channels.get(notifyChannel)
		channel.send(`Ben was added to ${guild.name}, it has a total of ${guild.members.size} members, and ${guild.channels.size} channels. It is owned by ${guild.owner.user}. (ID: ${guild.id})`)
});
client.on('guildDelete', guild =>{
	var channel = client.channels.get(notifyChannel)
		channel.send(`Ben was removed from ${guild.name}, it has a total of ${guild.members.size} members, and ${guild.channels.size} channels. It is owned by ${guild.owner.user}. (ID: ${guild.id})`)
});

//message replies, commands, and announcements
client.on("message", message => {  
	var allpainnogainmain = client.channels.get('244294978753396736');//all pain no gain
	var allpainnogainprison = client.channels.get('252503882951950340'); //all pain no gain bobprison
	var feeshmain = client.channels.get('323639445842558977');//
		if(message.author.bot)return;
		if(message.author.id === '193430512583311360' && message.attachments.size > 0) {
			return message.delete().catch(O_o=>{})
		}
		if(message.content.startsWith('//') && message.guild.id == '198399488614727680')return message.react('🙊');
		if(message.content.startsWith(prefix))return;
			if(message.content.includes('press f')){
				message.react('🇫');
			};
			if(message.content == '<@329722471295221760> help') {
				const embed = new Discord.RichEmbed()
					.setAuthor(`BigBen`, client.user.displayAvatarURL)
    				.setColor('54719E')
       				.setThumbnail(client.user.displayAvatarURL)
				    .setFooter(`Any message from the me can be removed by reacting with a ⏲ emoji.`)
        			.setDescription('Simple bot whose main functionality is to bong every hour in UTC!\n\Don\'t want the bongs? Mute me from your default channel!\n\*Annoying? Yes. Stupid? Definitely. Useful? Not so much.*')
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
        			.setDescription('Simple bot whose main functionality is to bong every hour in UTC!\n\Don\'t want the bongs? Mute me from your default channel!\n\*Annoying? Yes. Stupid? Definitely. Useful? Not so much.*')
				    .addField(`__This is a terrible bot:__`, `Me too thanks <:feelsOKmAng:342035709999448067>`, true)
        			.addField(`__Invite Me!:__`, `[Invite Link](https://discordapp.com/oauth2/authorize?client_id=329722471295221760&scope=bot&permissions=2083912831)`, true)
        			.addField(`__Commands:__`, `Use \`--commands\` to see a list of my commands.\n\You can also use \`--help [command]\` to get help on a specific command.`)
        			.addField(`__Support:__`, `Contact <@180050347589369856> for direct support.\n\Or use \`--support [message]\` to send a support message.`);
     			return message.channel.send({embed}).then(m=>m.react("⏲"))
			}
				//vv announcements and insults, tied to homeguild
					if(message.channel.id =='335764527176089610') {;
						return allpainnogainmain.send(message.content);
					}
					if(message.channel.id =='337007224134303747') {;
						return allpainnogainmain.send(`${client.consts.insults[Math.round(Math.random() * (client.consts.insults.length - 1))]}`);
					}
					if(message.channel.id =='337643020352749569') {;
						let paragraph = txtgen.paragraph();
							return allpainnogainmain.send(paragraph);
					}
					if(message.channel.id =='337727000036769792') {;
						return allpainnogainprison.send(message.content);
					}
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
    return console.error(err);
  }
});

//logs given messages 
client.on('messageUpdate', (oldMessage, newMessage) => { //logs message updates
	try {
		if(oldMessage.author.bot) return;
		if(oldMessage.guild.id == '198399488614727680' && oldMessage.author.id == '180050347589369856') return;
		if(oldMessage.attachments.size > 0) return;
    	let chan = client.channels.get("335784491425726474");
		const embed = new Discord.RichEmbed()
  	.setAuthor(`${oldMessage.member.user.tag}`, oldMessage.member.user.displayAvatarURL)
  	.setColor('D1F2A5')
    .setFooter(`Guild: ${oldMessage.guild.id} | Channel: ${oldMessage.channel.id}`)
  	.addField(`${oldMessage.guild.name}, ${oldMessage.channel.name}`, "Old:   " +  oldMessage + '' + '\n' + "New: " + '' + newMessage + '' );
 	chan.send({embed})
	} catch(err) {
		var channel = client.channels.get(notifyChannel)
			channel.send('Something went wrong with the edited message logs.');
	}
})
client.on('messageDelete', message => { //logs deleted messages
	try {
		if(message.author.bot) return;
		if(message.author.id == '180050347589369856') return;
		if(message.attachments.size > 0) return;
		let chan = client.channels.get("335818764002131969");
		const embed = new Discord.RichEmbed()
 	 .setAuthor(message.member.user.tag, message.member.user.displayAvatarURL)
 	 .setColor('F56991')
     .setFooter(`Guild: ${message.guild.id} | Channel: ${message.channel.id}`)
	 .addField(`${message.guild.name}, ${message.channel.name}`, message)
 	chan.send({embed})
	} catch(err) {
		var channel = client.channels.get(notifyChannel)
			channel.send('Something went wrong with the deleted message logs.');
	}
})

//removes bot's message if reacted with timer
client.on("messageReactionAdd", (messageReaction, user) => {
	if(messageReaction.message.author.id !== '329722471295221760') return;
	if(user.bot) return;
	if(messageReaction.emoji == '⏲') {
        messageReaction.message.delete();
      }
})

//server announcements for leaves and joins, sends it to main server
//server announcement for when someone joins
client.on('guildMemberAdd', member => {
  var channel = client.channels.get(notifyChannel)
  let guild = member.guild;
  const embed = new Discord.RichEmbed()
  .setAuthor(member.user.tag, member.user.displayAvatarURL)
  .setColor('F0A38F')
  .setFooter(`Big Ben sees all™`)
  .setTimestamp()
  .addField('User Update',
    `${member.user}, has joined [${guild}](${guild.id})`)
  channel.send({embed});
});
//server announcement for when someone leaves
client.on('guildMemberRemove', member => {
  var channel = client.channels.get(notifyChannel)
  let guild = member.guild;
  const embed = new Discord.RichEmbed()
  .setAuthor(member.user.tag, member.user.displayAvatarURL)
  .setColor('7C7F86')
  .setFooter(`Big Ben sees all™`)
  .setTimestamp()
  .addField('User update',
    `${member.user} just left [${guild}](${guild.id})`)
  channel.send({embed});
});

//big ben base, bongs every hour in utc
client.on('ready', () => {

	var rule = new schedule.RecurrenceRule(); 
	rule.minute = 0; 
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
});