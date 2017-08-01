const Kaori = require('kaori');
const kaori = new Kaori();

exports.run = (client, message, Discord, args) => {
    if(!message.channel.nsfw && message.author.id != '180050347589369856') return message.channel.send('This is not an NSFW channel!');
     var query = message.content.split(/\s+/g).slice(1).join(" ");
     message.channel.send(`Searching for **${query}** on Danbooru!`).then(m => m.delete(3000));
        kaori.search('danbooru', { tags: [query], limit: 1, random: true })
         .then(images => message.channel.send(":card_box: " + query + '\n' + images[0].common.fileURL))
         .catch(err => message.channel.send(`No results found for **${query}**`));
}