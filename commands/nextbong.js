var moment = require('moment');

exports.run = async (client, message, Discord) => {
    var minuteNow = moment().minutes(); 
    var nextBong = 60 - minuteNow
    var clock = client.consts.clocks[Math.round(Math.random() * (client.consts.clocks.length - 1))]
    message.channel.send(`${clock} ${nextBong} minutes until the next bong!`)
}