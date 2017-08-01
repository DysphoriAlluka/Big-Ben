const randomPuppy = require('random-puppy')

exports.run = (client, message, Discord) => {
    var randSubreddit = client.consts.subreddits[Math.round(Math.random() * (client.consts.subreddits.length - 1))]
    randomPuppy(randSubreddit)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setAuthor(randSubreddit)
                .setImage(url)
                .setColor('#887064')
            message.channel.send({embed})
        })
}
