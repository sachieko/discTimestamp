# Discord Weekly Timestamp Creator

This is a simple command-line node.js program that creates a timestamp and copies a string to the clipboard that makes use of [Discord's Dynamic Timestamps](https://discord.com/developers/docs/reference#message-formatting-timestamp-styles). Due to how dynamic timestamps work, you only need to set the time for your local computer, and all  other users will see the time for their locale. 

### Use

`npm run dev` or `node discTimestamp.js`

This will automatically copy the string shown in console to your OS clipboard for pasting into discord. Just paste it in as part of a message and send and it will automatically adjust for all users. Great for letting people know when a certain event is taking place!

## How to setup

This will currently make a timestamp that finds the next Wednesday at 8 PM. To modify it change the following numbers.

Change the number for `DAYOFWEEK` on line 4 to get your desired date. **3** represents Wednesday for example, starting at **0** for Sunday, ending at **6** for Saturday.

```js 
nextDate.setDate(nextDate.getDate() + ((DAYOFWEEK + 7 - nextDate.getDay()) % 7));
```

Change the number for `HOUR` (in 24h time format, ie: 16 = 4 PM) on line 6

```js
nextDate.setHours(HOUR);
```

Save the file and then run and paste the string into discord to test. 

## Dependencies

This program depends on [node-copy-paste](https://www.npmjs.com/package/copy-paste?activeTab=readme) by [xavi](https://github.com/xavi-).

If there are issues with using this dependency on Windows, you can try installing another node module that allows writing to the OS's clipboard.

I've kept this simple since it is writing to the OS's clipboard so it is very clear what is being written to those with little dev knowledge.