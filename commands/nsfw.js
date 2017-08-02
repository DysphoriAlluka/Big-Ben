const randomPuppy = require('random-puppy')

exports.run = (client, message, Discord) => {
    if(!message.channel.nsfw) return message.channel.send('This is not an NSFW channel!').then(m => m.delete(5000));
    var randSubreddit = client.consts.nsfwSubreddits[Math.round(Math.random() * (client.consts.nsfwSubreddits.length - 1))]
    randomPuppy(randSubreddit)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setAuthor(randSubreddit)
                .setImage(url)
                .setColor('#CEA0A6')
            return message.channel.send({embed})
        })
}