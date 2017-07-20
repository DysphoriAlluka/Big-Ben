exports.run = async(client, message, date, Discord, args) => {
  const config = require("../auth.json");
  const GoogleImages = require("google-images");
  const gClient = new GoogleImages(config.googleCSE, config.googleAPI);

  let search = args.join(" ");

  if (search.length > 0) {
    try {
      const response = await gClient.search(search, {
        safe: "off"
      });
      if (!response) {
        let m = await message.send("Nothing Found!");
        m.delete(2000);
        return;
      } else {
        let image = response[0].url;
        const embed = await new Discord.RichEmbed()
          .setColor(`FE8E46`)
          .setTitle(`${search}`)
          .setDescription(image)
          .setImage(image);
        message.delete();
        message.channel.send("", {
          embed
        });
      }

    } catch (err) {
      let m = await message.send("Something went wrong with the search.");
      m.delete(2000);
      console.error(err);
    }
  } else {
    let m = await message.send(":warning: Invalid Parameters!");
    m.delete(2000);
  }
};