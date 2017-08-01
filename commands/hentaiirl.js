const imgur = require('random-puppy');

exports.run = async (client, message, Discord) => {
    if(!message.channel.nsfw && message.author.id != '180050347589369856') return message.channel.send('This is not an NSFW channel!').then(m => m.delete(5000));
    imgur('hentai_irl')
       .then(url => {
            const embed = new Discord.RichEmbed()
                .setAuthor('Hentai_irl', 'https://a.safe.moe/jZZKM.png')
                .setImage(url)
                .setColor('#A1A0B0')
            return message.channel.send({embed})
    })
}