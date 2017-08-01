var randomHex = require('random-hex');

exports.run = async(client, message, Discord, args) => {
  var colour = args.join(" ");
  
  if(!colour){
    var genColour = randomHex.generate();
    const embed = new Discord.RichEmbed()
      .setColor(genColour)
      .setDescription(genColour)
    return message.channel.send({embed});
  }

  if (((colour.indexOf("#") === 0) && colour.length === 7) || (!isNaN(colour) && colour.length <= 8 && colour < 16777215)) {
    const embed = await new Discord.RichEmbed()
      .setColor(colour)
      .setDescription(colour);
    return message.channel.send({embed});
  } else {
    let m = await message.channel.send("Invalid Parameters!");
    m.delete(2000);
  }
};
