exports.run = (client, message, Discord, args) => {
    if(message.content == '--help') { //base help
     const embed = new Discord.RichEmbed()
    	.setAuthor(`BigBen`, client.user.displayAvatarURL)
    	.setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
	    .setFooter(`Any message from the me can be removed by reacting with a ⏲ emoji.`)
        .setDescription('Simple bot whose main functionality is to bong every hour in UTC!\n\*Annoying? Yes. Stupid? Definitely. Useful? Not so much.*')
        .addField(`__Invite Me!:__`, `[Invite Link](https://goo.gl/rpihva)`, true)
        .addField(`__This is a terrible bot:__`, `Me too thanks <:feelsOKmAng:342035709999448067>`, true)
        .addField(`__Commands:__`, `Use '--commands' to see a list of my commands.\n\You can also use --help [command] to get help on a specific command.`)
        .addField(`__Support:__`, `Contact <@180050347589369856> for direct support.\n\Or use --support [message] to send a support message.`);
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('talk')) { //talk cleverbot
     const embed = new Discord.RichEmbed()
        .setAuthor(`Talk`, 'https://a.safe.moe/S4jjl.png')
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Fun | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Talk to the bot using the cleverbot api.` )
        .addField(`__Usage:__`, "`--! [sentence]`")
        .addField(`__Note:__`, `This command is limited to only 5000 usages, I will find a permanent alternative when this runs out.`);
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('bing')) { //bing/ping
     const embed = new Discord.RichEmbed()
        .setAuthor(`Bing`, 'https://a.safe.moe/okClI.png')
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Utility | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Pings the bot and gives the ms latency.` )
        .addField(`__Usage:__`, "`--bing`")
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('colour')) { //colour
     const embed = new Discord.RichEmbed()
        .setAuthor(`Colour`, 'https://a.safe.moe/Yfolq.jpg')
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Utility | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Shows preview for a given hex colour, if none provided, a random colour will be generated.` )
        .addField(`__Usage:__`, "`--colour <colour code>`")
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('img')) { //google image search
     const embed = new Discord.RichEmbed()
        .setAuthor(`Img/Image`, 'https://a.safe.moe/F3RvU.png')
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Search | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Searches google images for your word or keyword.` )
        .addField(`__Usage:__`, "`--img [search tag or keyword]`")
        .addField(`__Note:__`, `This command is limited to only 100 usages per day, please do not spam it.`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('insult')) { //insults
     const embed = new Discord.RichEmbed()
        .setAuthor(`Insult`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Fun | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Insults someone using the list of premade insults.` )
        .addField(`__Usage:__`, "`--insult`")
        .addField(`__Note:__`, `THIS COMMAND IS VERY OFFENSIVE, USE AT YOUR OWN RISK.`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('say')) { //say
     const embed = new Discord.RichEmbed()
        .setAuthor(`Say`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Hidden | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Makes Ben speak your sentence for you, and then removes your command.`)
        .addField(`__Usage:__`, "`--say [message]`")
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('saytts')) { //saytts
     const embed = new Discord.RichEmbed()
        .setAuthor(`SayTTS`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Hidden | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Makes Ben speak your sentence for you in TTS, and then removes your command.`)
        .addField(`__Usage:__`, "`--! [sentence]`")
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('support')) { //support message
     const embed = new Discord.RichEmbed()
        .setAuthor(`Support`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Info | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Sends your message to the support server.` )
        .addField(`__Usage:__`, "`--support [questions, inquiries, feedback, issues, or bugs] <--dm>`")
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('time')) { //time command
     const embed = new Discord.RichEmbed()
        .setAuthor(`Time`, 'https://a.safe.moe/jE3GJ.png')
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Utility | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Tells the date and time in a specific location.` )
        .addField(`__Usage:__`, "`--time [location]`")
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('weather')) { //weather command
     const embed = new Discord.RichEmbed()
        .setAuthor(`Weather`, 'https://a.safe.moe/JPcx7.png')
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Utility | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Shows detailed weather information for the given location.` )
        .addField(`__Usage:__`, "`--weather [location]`")
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('wiki')) { //wikipedia command
     const embed = new Discord.RichEmbed()
        .setAuthor(`Wiki`, 'https://a.safe.moe/8GCNj.png')
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Search | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Returns the summary of the first matching search result from Wikipedia.`)
        .addField(`__Usage:__`, "`--wiki [query]`")
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('deletthis')) { //deletes 2 messages
     const embed = new Discord.RichEmbed()
        .setAuthor(`Delet This`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Hidden | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Deletes the message sent before the command.`)
        .addField(`__Usage:__`, "`--deletthis`")
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('translate')) { //translation
     const embed = new Discord.RichEmbed()
        .setAuthor(`Translate`, 'https://a.safe.moe/2jXgX.png')
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Utility | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Translates the given text to a specified language.`)
        .addField(`__Usage:__`, "`--translate [language] [foreign text]`")
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content == ('--help help')) { //help????help???
     const embed = new Discord.RichEmbed()
        .setAuthor(`Help`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Info | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Shows the main help message.`)
        .addField(`__Usage:__`, "`--help`")
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('nextbong')) { //next bong
     const embed = new Discord.RichEmbed()
        .setAuthor(`Next Bong`, 'https://a.safe.moe/jE3GJ.png')
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Info | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Tells you how much longer till the next bong.`)
        .addField(`__Usage:__`, "`--nextbong`")
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('commands')) { //commands
     const embed = new Discord.RichEmbed()
        .setAuthor(`Commands`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Info | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Shows list of commands.`)
        .addField(`__Usage:__`, "`--commands`")
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('smug')) { //smug
     const embed = new Discord.RichEmbed()
        .setAuthor(`Smug`, 'http://smug.moe/smg/17.png')
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Fun | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Sends a random smug anime picture.`)
        .addField(`__Usage:__`, "`--smug`")
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('rightthere')) { //right there
     const embed = new Discord.RichEmbed()
        .setAuthor(`Right There`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Fun | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Outputs a random 'right there' emojipasta.`)
        .addField(`__Usage:__`, "`--rightthere`")
        .addField(`__Note:__`, `This contains nsfw elements and language, please use accordingly.`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('cat')) { //random cat
     const embed = new Discord.RichEmbed()
        .setAuthor(`Cat`, 'http://random.cat/random.cat-logo.png')
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Fun | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Shows a random picture of a cat. And who doesn't love cats?`)
        .addField(`__Usage:__`, "`--cat`")
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('8ball')) { //8ball
     const embed = new Discord.RichEmbed()
        .setAuthor(`8ball`, 'https://a.safe.moe/aKDHV.png')
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Fun | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Ask the all knowing 8ball a question.`)
        .addField(`__Usage:__`, "`--8ball [question]`")
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('youtube')) { //youtube
     const embed = new Discord.RichEmbed()
        .setAuthor(`YouTube`, 'https://a.safe.moe/V3Dhb.png')
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Search | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Searches for videos on YouTube.`)
        .addField(`__Usage:__`, "`--youtube [query]`")
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('danbooru')) { //danbooru search 
     const embed = new Discord.RichEmbed()
        .setAuthor(`Danbooru`, 'https://a.safe.moe/OYVQe.png')
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`NSFW | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Searches for images on Danbooru.`)
        .addField(`__Usage:__`, "`--danbooru [tags]`")
        .addField(`__Note:__`, `This command can only be used in NSFW channels.`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('safebooru')) { //safebooru search 
     const embed = new Discord.RichEmbed()
        .setAuthor(`Safebooru`, 'https://a.safe.moe/OYVQe.png')
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`NSFW | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Searches for images on Safebooru.`)
        .addField(`__Usage:__`, "`--safebooru [tags]`")
        .addField(`__Note:__`, `This command can be used in non-nsfw channels, but keep in mind Safebooru's definition of safe.`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('neko')) { //lewd neko
     const embed = new Discord.RichEmbed()
        .setAuthor(`Neko`, 'https://a.safe.moe/3XYZ6.gif')
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`NSFW | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Uses [nekos.life](http://nekos.life/) to send you the best images of lewd nekos.`)
        .addField(`__Usage:__`, "`--neko`")
        .addField(`__Note:__`, `This command can only be used in NSFW channels.`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('ass')) { //ass
     const embed = new Discord.RichEmbed()
        .setAuthor(`Ass`, 'https://a.safe.moe/cM3Vs.png')
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`NSFW | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Sends a random picture of ass. 'Ain't no playin' around, you just gotta get in there, and eat the whole ass, bruh.'`)
        .addField(`__Usage:__`, "`--ass`")
        .addField(`__Note:__`, `This command can only be used in NSFW channels.`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('boobs')) { //boobs
     const embed = new Discord.RichEmbed()
        .setAuthor(`Boobs`, 'https://a.safe.moe/cM3Vs.png')
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`NSFW | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Sends a random picture of boobs.`)
        .addField(`__Usage:__`, "`--boobs`")
        .addField(`__Note:__`, `This command can only be used in NSFW channels.`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('hentaiirl')) { //reddit trash
     const embed = new Discord.RichEmbed()
        .setAuthor(`Hentai_Irl`, 'https://a.safe.moe/jZZKM.png')
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`NSFW | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Sends a random picture from [r/hentai_irl](https://www.reddit.com/r/hentai_irl/).`)
        .addField(`__Usage:__`, "`--hentaiirl`")
        .addField(`__Note:__`, `This command can only be used in NSFW channels.`)
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }
    if(message.content.includes('meme')) { //reddit trash
     const embed = new Discord.RichEmbed()
        .setAuthor(`Meme`, client.user.displayAvatarURL)
        .setColor('54719E')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Fun | Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Description:__`, `Sends a random picture from selected meme subreddits.`)
        .addField(`__Usage:__`, "`--meme`")
     return message.channel.send({embed}).then(m=>m.react("⏲"))
    }  
}