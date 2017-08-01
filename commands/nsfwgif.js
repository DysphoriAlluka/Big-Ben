const imgur = require('random-puppy');

exports.run = async (client, message, Discord) => {
    if(!message.channel.nsfw && message.author.id != '180050347589369856') return message.channel.send('This is not an NSFW channel!').then(m => m.delete(5000));
    imgur('NSFW_GIF')
       .then(url => {
            const embed = new Discord.RichEmbed()
                .setAuthor('NSFW.gif', 'https://a.safe.moe/O8TDd.png')
                .setImage(url)
                .setColor('#C1759C')
            return message.channel.send({embed})
    })
}