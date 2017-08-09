exports.run = (client, message, Discord, args) => {
    if(!message.channel.nsfw) return message.channel.send('This is not an NSFW channel!').then(m => m.delete(5000));
        const embed = new Discord.RichEmbed()
            .setAuthor("NSFW Commands", client.user.displayAvatarURL)
            .setDescription(`Use --help <commandname> for more details.`)
            .setColor('B6D6E7')
            .setThumbnail(client.user.displayAvatarURL)
            .addField("__2D:__", "`danbooru` `hentai` `hentaiirl` `neko` `rule34` `safebooru`")
            .addField("__3D:__", "`ass` `boobs` `nsfw` `nsfwgif`")
}
