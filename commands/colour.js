exports.run = async(client, message, Discord, args) => {
  var colour = args.join(" ");

  if (((colour.indexOf("#") === 0) && colour.length === 7) || (!isNaN(colour) && colour.length <= 8 && colour < 16777215)) {
    const embed = await new Discord.RichEmbed()
      .setColor(colour)
      .setDescription(colour);
    message.channel.send({embed});
  } else {
    let m = await message.channel.send(":warning: **Invalid Parameters!** :warning:");
    m.delete(2000);
  }
};
