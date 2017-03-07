'use strict';
var Alexa = require("alexa-sdk");

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('SayHello');
    },
    'FindJobIntent': function () {
        this.emit('FindJob')
    },
    'FindJob': function () {
        this.emit(':tell', 'karthik & kishore are working on this skill, don\'t worry you will get a job!');
    }
};
