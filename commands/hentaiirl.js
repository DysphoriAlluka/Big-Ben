const randomPuppy = require('random-puppy');

exports.run = async (client, message, Discord) => {
    if(!message.channel.nsfw && message.author.id != '180050347589369856') {
        message.channel.send('This is not an NSFW channel!').then(m => m.delete(5000));
        return message.react('✖')
    }
        
    randomPuppy('hentai_irl')
       .then(url => {
            const embed = new Discord.RichEmbed()
                .setFooter('Hentai_irl', 'https://a.safe.moe/jZZKM.png')
                .setImage(url)
                .setColor('#A187E0')
            return message.channel.send({embed})
    })
}