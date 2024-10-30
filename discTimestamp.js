const ncp = require("copy-paste");
const nextDate = new Date();
// 3 represents the Wednesday, while 7 is days in a week.
nextDate.setDate(nextDate.getDate() + ((3 + 7 - nextDate.getDay()) % 7));
// This is 8 PM in 24 hour time. Chance 20 to desired 24h time to modify.
nextDate.setHours(20);
nextDate.setMinutes(0);
nextDate.setSeconds(0);
// Discord timestamps do not use milliseconds so we remove them
const UTCstamp = `${(nextDate.getTime() - (nextDate.getTime() % 1000)) / 1000}`;
const discordString = `<t:${UTCstamp}:R> , <t:${UTCstamp}:F>`;
ncp.copy(discordString, () => {
  console.log(`String copied: ${discordString}`); // Let user know what has been copied to clipboard.
  console.log(`This represents the date of ${nextDate.toLocaleDateString()}`);
  process.exit(); // Exit node process.
});
