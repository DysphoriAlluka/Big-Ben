const Jimp = require('jimp')

exports.run = async function (client, message, Discord, args) {
	if (!message.channel.permissionsFor(client.user.id).has('ATTACH_FILES')) {
		return message.reply('I can\'t attach messages!').then(m => m.delete(5000));
	}

    let avatarurl = (message.mentions.users.size > 0 ? message.mentions.users.first().displayAvatarURL : message.author.displayAvatarURL).replace('gif', 'png')
	if (['jpg', 'jpeg', 'gif', 'png', 'webp'].some(x => args.join(' ').includes(x))) {
		avatarurl = args.join(' ').replace(/gif|webp/g, 'png')
	}

    const plsshut = await Jimp.read(avatarurl)

    const font = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK)
    
    plsshut.resize(200, 200)
	plsshut.print(font, 37, 60, 'SHUT', 225)

	plsshut.getBuffer(Jimp.MIME_PNG, async (err, buffer) => {
		try {
			await message.channel.send({
				files: [{
					name: 'plsshut.png',
					attachment: buffer
				}]
			})
		} catch (err) {
			message.channel.send(`Something went wrong while executing that function.`).then(m => m.delete(5000));
		}
	})
}