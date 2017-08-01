const Danbooru = require('danbooru')
let booru = new Danbooru()

exports.run = async (client, message, Discord, args) => {
    if(!message.channel.nsfw && message.author.id != '180050347589369856') return message.channel.send('This is not an NSFW channel!')
    var query = message.content.split(/\s+/g).slice(1).join(" ");
    message.channel.send(`Searching for **${query}** on Danbooru!`).then(m => m.delete(3000));
    booru.posts(query).then(async post => {
     let postsId = String(post)
     var id = postsId.split(',')[Math.floor(Math.random() * 20)]
        if(!id) {
            return message.channel.send(`There were no results for **${query}**!`)
        }
    return message.channel.send(`https://danbooru.donmai.us/posts/${id}`)
    })
}
