# Discord Weekly Timestamp Creator

This is a simple command-line node.js program that creates a timestamp and copies a string to the clipboard that makes use of [Discord's Dynamic Timestamps](https://discord.com/developers/docs/reference#message-formatting-timestamp-styles). Due to how dynamic timestamps work, you only need to set the time for your local computer, and all  other users will see the time for their locale. 

### Use

>`npm start [day] [hour] [minutes] [seconds]` 

or 

>`node discTimestamp.js [day] [hour] [minutes] [seconds]`

This will automatically copy the string shown in console to your OS clipboard for pasting into discord. Just paste it in as part of a message and send and it will automatically adjust for all users. Great for letting people know when a certain event is taking place!

## How to setup and demo

Run `npm install` to install the necessary node modules. There is only 1 package it depends on, see dependencies for more information.

## How to use 
You can make a timestamp to post into discord with the following format in the example:

>`npm start 25 20`  

This sets a timestamp for the next 25th day of the month at 8:00 PM. You can also include minutes and even seconds if you wish in the following format: 

>`npm start 25 20 30 15`

This sets a timestamp for the next 25th day of the month at 8:30:15 PM.

## Dependencies

This program depends on [node-copy-paste](https://www.npmjs.com/package/copy-paste?activeTab=readme) by [xavi](https://github.com/xavi-).

If there are issues with using this dependency on Windows, you can try installing another node module that allows writing to the OS's clipboard.

I've kept this simple since it is writing to the OS's clipboard so it is very clear what is being written to those with little dev knowledge.

## Version details

1.1.0 is a breaking change with 1.0.0 in terms of how to use it. You no longer need to edit numbers within the program to use it for personal use, just input arguments when you initially run the program.