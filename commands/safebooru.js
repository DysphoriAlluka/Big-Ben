const Danbooru = require('danbooru')
let booru = new Danbooru.Safebooru()

exports.run = async (client, message, Discord, args) => {
    var query = message.content.split(/\s+/g).slice(1).join(" ");
    message.channel.send(`Searching for **${query}** on Safebooru!`).then(m => m.delete(3000));
    booru.posts(query).then(async post => {
     let postsId = String(post)
     var id = postsId.split(',')[Math.floor(Math.random() * 20)]
        if(!id) {
            return message.channel.send(`There were no results for **${query}**!`)
        }
    return message.channel.send(":card_box: " + query + '\n' + `https://safebooru.org/index.php?page=post&s=view&id=${id}`)
    })
}
