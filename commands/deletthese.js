exports.run = (client, message) => {
    message.channel.bulkDelete(5);
}