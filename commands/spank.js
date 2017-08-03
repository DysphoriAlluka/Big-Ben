const Jimp = require('jimp')

exports.run = async function (client, message, Discord, args) {
	if (!message.channel.permissionsFor(client.user.id).has('ATTACH_FILES')) {
		return message.reply('I can\'t attach messages!').then(m => m.delete(5000));
	}

	let avatarurl = (message.mentions.users.size > 0 ? message.mentions.users.first().displayAvatarURL : message.author.displayAvatarURL).replace('gif', 'png')
	const authorurl = message.mentions.users.size > 0 ? message.author.displayAvatarURL.replace('gif', 'png') : client.user.displayAvatarURL.replace('gif', 'png')
	if (['jpg', 'jpeg', 'gif', 'png', 'webp'].some(x => args.join(' ').includes(x))) {
		avatarurl = args.join(' ').replace(/gif|webp/g, 'png')
	}

	const [avatar, author] = await Promise.all([
		Jimp.read(avatarurl),
		Jimp.read(authorurl)
	])
	const spank = await Jimp.read('./assets/images/spank.jpg')
	avatar.resize(120, 120)
	author.resize(140, 140)
	spank.resize(500, 500)
	spank.composite(avatar, 350, 220)
	spank.composite(author, 225, 5)
	spank.getBuffer(Jimp.MIME_PNG, async(err, buffer) => {
		try {
			await message.channel.send({
				files: [{
					name: 'spank.png',
					attachment: buffer
				}]
			})
		} catch (e) {
			message.channel.send(`Something went wrong while executing that function.`).then(m => m.delete(5000));
		}
	})
}