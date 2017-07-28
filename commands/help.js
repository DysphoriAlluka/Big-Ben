exports.run = async (client, message, Discord, args) => {
    if(message.content == '--help') { //base help
     const embed = new Discord.RichEmbed()
    	.setAuthor(`BigBen`, client.user.displayAvatarURL)
    	.setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
	    .setFooter(`Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .setDescription('Hi! My name is Ben and I\'m a bot created to say bong every hour in UTC! Ben aims to have commands that not a lot of bots have! You can also use --help [command] to get help on a specific command!')
        .addField(`__Status:__`, `Online | Currently still in development` )
        .addField(`__Invite Link:__`, `https://goo.gl/rpihva`)
        .addField(`__Commands:__`, `My prefix is **--**\n You can find a list of my commands as of now here:\n https://hastebin.com/mazadecata.md `)
        .addField(`__Support:__`, `Contact <@180050347589369856> for direct support.\n\You can also join this server https://discord.gg/zE9ZSQz to be imprisoned until I get to you.\n\Or use --support [message] to send a support message.`)
        .addField(`__Additional Info:__`, `This bot is based purely on Voctor's original Big Ben bot. Seeing it offline all the time was devastating, to say the least. Hence the creation of this bootleg, deepfried, Ben. All credits go to where it's due.`, true);
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('talk')) { //talk cleverbot
     const embed = new Discord.RichEmbed()
        .setAuthor(`Talk`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Talk to the bot using the cleverbot api.` )
        .addField(`__Usage:__`, `--! [sentence]`)
        .addField(`__Note:__`, `This command is limited to only 5000 usages per month, please do not spam it.`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('article')) { //article
     const embed = new Discord.RichEmbed()
        .setAuthor(`Article`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Generates a random article.` )
        .addField(`__Usage:__`, `--article`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('bing')) { //bing/ping
     const embed = new Discord.RichEmbed()
        .setAuthor(`Bing`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Pings the bot and gives the ms latency.` )
        .addField(`__Usage:__`, `--bing`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('colour')) { //colour
     const embed = new Discord.RichEmbed()
        .setAuthor(`Colour`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Shows preview for a given hex colour.` )
        .addField(`__Usage:__`, `--colour [colour code]`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('img')) { //google image search
     const embed = new Discord.RichEmbed()
        .setAuthor(`Img/Image`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Searches google images for your word or keyword.` )
        .addField(`__Usage:__`, `--img [search tag or keyword]`)
        .addField(`__Note:__`, `This command is limited to only 100 usages per day, please do not spam it.`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('insult')) { //insults
     const embed = new Discord.RichEmbed()
        .setAuthor(`Insult`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Insults someone using the list of premade insults.` )
        .addField(`__Usage:__`, `--insult`)
        .addField(`__Note:__`, `THIS COMMAND IS VERY OFFENSIVE, USE AT YOUR OWN RISK.`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('paragraph')) { //paragraph generator
     const embed = new Discord.RichEmbed()
        .setAuthor(`Paragraph`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Generates a random paragraph.` )
        .addField(`__Usage:__`, `--paragraph`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('say')) { //say
     const embed = new Discord.RichEmbed()
        .setAuthor(`Say`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Makes Ben speak your sentence for you, and then removes your command.` )
        .addField(`__Usage:__`, `--say [message]`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('saytts')) { //saytts
     const embed = new Discord.RichEmbed()
        .setAuthor(`SayTTS`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Makes Ben speak your sentence for you in TTS, and then removes your command.` )
        .addField(`__Usage:__`, `--! [sentence]`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('sentence')) { //sentence generator
     const embed = new Discord.RichEmbed()
        .setAuthor(`Sentence`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Generates a random sentence.` )
        .addField(`__Usage:__`, `--sentence`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('support')) { //support message
     const embed = new Discord.RichEmbed()
        .setAuthor(`Support`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Sends your message to the support server.` )
        .addField(`__Usage:__`, `--support [questions, inquiries, feedback, issues, or bugs] <--dm>`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('time')) { //time command
     const embed = new Discord.RichEmbed()
        .setAuthor(`Time`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Tells the date and time in a specific location.` )
        .addField(`__Usage:__`, `--time [location]`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('weather')) { //weather command
     const embed = new Discord.RichEmbed()
        .setAuthor(`Weather`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Shows detailed weather information for the given location.` )
        .addField(`__Usage:__`, `--weather [location]`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
}