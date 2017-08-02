const randomPuppy = require('random-puppy')

exports.run = (client, message, Discord) => {
    if(!message.channel.nsfw) return message.channel.send('This is not an NSFW channel!').then(m => m.delete(5000));
    var randSubreddit = client.consts.hentaiSubreddits[Math.round(Math.random() * (client.consts.hentaiSubreddits.length - 1))]
    randomPuppy(randSubreddit)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setFooter(`r/${randSubreddit}`)
                .setImage(url)
                .setColor('#A187E0')
            return message.channel.send({embed})
        })
}