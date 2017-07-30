var txtgen = require('txtgen');

exports.run = async (client, message) => {
  let paragraph = txtgen.paragraph();
     return message.channel.send(paragraph)
}
