const discstamp = require('discstamp');


const amPmTimestamp = '7:00 PM PST';
const discordTimestampFromAmPm = discstamp.ampm(amPmTimestamp);
console.log(discordTimestampFromAmPm);


const isoTimestamp = '2024-01-27T19:45:00';
const discordTimestampFromIso = discstamp.iso(isoTimestamp);
console.log(discordTimestampFromIso);