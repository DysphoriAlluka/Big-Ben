var schedule = require('node-schedule');

exports.run = async (client, message, Discord) => {
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('You cannot use this command! Ask someone of higher rankings.')
    message.channel.send(`Bong channel set to ${message.channel}. There is currently no way to reverse this, if I stop bonging, please use this command again. It is currently a temporary workaround until I find a permanent solution. This is due to Discord deprecating default channels.`)
    var rule = new schedule.RecurrenceRule(); 
    rule.minute = 0
    rule.hour = 1; 
    var a = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG!***");
    })

    rule.hour = 2; 

    var b = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG BONG!***");
    })

    rule.hour = 3; 

    var c = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG BONG BONG!***");
    })

    rule.hour = 4; 

    var d = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG BONG BONG BONG!***");
    })

    rule.hour = 5; 

    var e = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG BONG BONG BONG BONG!***");
    })

    rule.hour = 6; 

    var f = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG BONG BONG BONG BONG BONG!***");
    })

    rule.hour = 7; 

    var g = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG BONG BONG BONG BONG BONG BONG!***");
    })

    rule.hour = 8; 

    var g = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG BONG BONG BONG BONG BONG BONG BONG!***");
    })

    rule.hour = 9; 

    var i = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG!***");
    })

    rule.hour = 10; 

    var j = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG!***");
    })

    rule.hour = 11; 

    var k = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG!***");
    })

    rule.hour = 12; 

    var l = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG!***");
    })

    rule.hour = 13; 

    var m = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG!***");
    })

    rule.hour = 14; 

    var n = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG BONG!***");
    })

    rule.hour = 15; 

    var o = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG BONG BONG!***");
    })

    rule.hour = 16; 

    var p = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG BONG BONG BONG!***");
    })

    rule.hour = 17; 

    var q = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG BONG BONG BONG BONG!***");
    })

    rule.hour = 18; 

    var r = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG BONG BONG BONG BONG BONG!***");
    })

    rule.hour = 19; 

    var s = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG BONG BONG BONG BONG BONG BONG!***");
    })

    rule.hour = 20; 

    var t = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG BONG BONG BONG BONG BONG BONG BONG!***");
    })

    rule.hour = 21; 

    var u = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG!***");
    })

    rule.hour = 22; 

    var v = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG!***");
    })

    rule.hour = 23; 

    var w = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG BONG!***");
    })

    rule.hour = 24; 

    var x = schedule.scheduleJob(rule, function() {
        message.channel.send("***BONG!***");
    })
}