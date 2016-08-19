'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.904887c3-7f84-4c06-9e76-5bc08244bd48"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Raspberry Pi';

/**
 * Array containing space facts.
 */
var FACTS = [
    "The Raspberry Pi is a series of credit card-sized single-board computers.",
    "The first generation Raspberry Pi 1 was released in February 2012 in basic model A and a higher specification model B.",
    "Raspberry Pi 2 model B was released in February 2015.",
    "Raspberry Pi 3 model B is the lastest model released in February 2016.",
    "Pi Zero with smaller size and limited input/output (I/O), general-purpose input/output (GPIO), abilities released in November 2015 for 5 dollar.",
    "All models feature a Broadcom system on a chip, which includes an ARM compatible central processing unit and an on chip VideoCore graphics processing unit.",
    "Raspberry Pi 3 model B has a quad core 1.2 GHz CPU and 1 gigabyte memory.",
    "MicroSD cards are used to store the operating system.",
    "Raspberry Pi 3 model B has four USB slots.",
    "Raspberry Pi 3 model B has a HDMI slot and a 3.5 mm phono jack for audio.",
    "Raspberry Pi 3 model B has built-in WI-FI and Bluetooth.",
    "Raspbian is a Debian based linux distribution customized for Raspberry Pi",
    "Raspberry Pi has the 40 pins general purpose input output, known as GPIO.",
    "Raspberry Pi could work with Arduino.",
    "Python is the primary programming language for Raspberry Pi, but other languages such as C, Java could also be used.",
    "Raspberry Pi can connect with a camera module via Camera Serial Interface (CSI) connector.",
    "NOOBS stands for New Out Of the Box Software and is a configuration tool that will help install the OS.",
    "The Raspberry Pi does not come with an enclosure unless you buy one as part of a kit.",
    "Raspberry Pi needs a power supply of 5 voltage DC to power it up.",
    "The Serial Port can be accessed using PySerial library from Python.",
    "A solderless breadboard is used to do some electronic prototyping with a Raspberry Pi.",
    "A breadboard and a Raspberry Pi can be connected by either jumper wires or Pi Cobbler."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a raspberry pi fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
