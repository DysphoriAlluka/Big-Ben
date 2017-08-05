const Jimp = require('jimp')

exports.run = async function (client, message, Discord, args) {
	if (!message.channel.permissionsFor(client.user.id).has('ATTACH_FILES')) {
		return message.reply('I can\'t attach messages!').then(m => m.delete(5000));
	}

	let avatarurl = (message.mentions.users.size > 0 ? message.mentions.users.first().displayAvatarURL : message.author.displayAvatarURL).replace('gif', 'png')
	if (['jpg', 'jpeg', 'gif', 'png', 'webp'].some(x => args.join(' ').includes(x))) {
		avatarurl = args.join(' ').replace(/gif|webp/g, 'png')
	}
    
    if (message.mentions.users.size > 0) {
		args = args.join(' ').substr(21)
	} else {
		args = args.join(' ')
	}

    if(args.includes('<' || '>')) {
        return message.channel.send('Woops! Looks like you provided the wrong arguments! Try `--walk [mention] [caption]` instead!')
    }

	if (args.length < 1) {
		return message.channel.send('Please provide a caption for this image.')
	}
	if (args.length > 47) {
		return message.channel.send(`Too long. You're ${args.length - 47} characters over the limit!`)
	}

	const avatar = await Jimp.read(avatarurl)
    const walk = await Jimp.read('./assets/images/adw.png')
    const blank = await Jimp.read('./assets/images/blank.png')
    const text = args

    const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK)
    
	blank.resize(650, 92)
	const caption = blank.print(font, 0, 0, text, 650)

    avatar.resize(128, 128)

    walk.composite(avatar, 384, 114)
    walk.composite(caption, 24, 17)
	walk.getBuffer(Jimp.MIME_PNG, async (err, buffer) => {
		try {
			await message.channel.send({
				files: [{
					name: 'walk.png',
					attachment: buffer
				}]
			})
		} catch (e) {
			await message.channel.send(`Something went wrong while executing that function.`).then(m => m.delete(5000));
		}

	})
}
