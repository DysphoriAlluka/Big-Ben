const randomPuppy = require('random-puppy')

exports.run = (client, message, Discord) => {
    var randSubreddit = client.consts.hentaiSubreddits[Math.round(Math.random() * (client.consts.hentaiSubreddits.length - 1))]
    randomPuppy(randSubreddit)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setAuthor(randSubreddit)
                .setImage(url)
                .setColor('#A187E0')
            message.channel.send({embed})
        })
}
