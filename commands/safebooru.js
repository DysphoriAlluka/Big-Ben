const booru = require('booru');

exports.run = (client, message, Discord, args) => {
     var query = message.content.split(/\s+/g).slice(1).join(" ");
     message.channel.send(`Searching for **${query}** on Safebooru!`).then(m => m.delete(3000));
        booru.search('safebooru', [query], {limit: 1, random: true})
         .then(booru.commonfy)
         .then(images => {
             for(let image of images) {
                 const embed = new Discord.RichEmbed()
                    .setAuthor(query, 'https://a.safe.moe/ppHw0.png')
                    .setImage(image.common.file_url)
                    .setColor('#e4d797')
                 message.channel.send({embed})
             }
         }).catch(err => {
             if(err.name === 'booruError') {
                 message.channel.send(`No results found for ${query}.`)
             } else {
                 message.channel.send(`No results found for ${query}.`)
             }
         })
}

