const ncp = require("copy-paste");
const nextDate = new Date();
const dayOfMonth = process.argv[2] || nextDate.getDate() + 7; // Sets a week forward by default
const hour = process.argv[3] || 20; // automatically sets to 8 PM locally as a demo
const minutes = process.argv[4] || 0;
const seconds = process.argv[5] || 0;
// If the day chosen is less than the current day of the month, use it for the next month
// This makes the program useful only for setting future timestamps, the intended use.
if (dayOfMonth < nextDate.getDate()) {
  nextDate.setMonth(nextDate.getMonth() + 1);
}
nextDate.setDate(dayOfMonth);
nextDate.setHours(hour);
nextDate.setMinutes(minutes);
nextDate.setSeconds(seconds);
// Discord timestamps do not use milliseconds so we remove them from the UTC timestamp
const UTCstamp = `${(nextDate.getTime() - (nextDate.getTime() % 1000)) / 1000}`;
const discordString = `<t:${UTCstamp}:R> , <t:${UTCstamp}:F>`;
ncp.copy(discordString, () => {
  console.log(`String copied: ${discordString}`); // Let user know what has been copied to clipboard.
  console.log(
    `This represents the date of ${nextDate.toLocaleDateString()} at ${nextDate.toLocaleTimeString()}`
  );
  process.exit(); // Exit node process.
});
