<p align="center">
  <img src="disco-stamp-logo.png" alt="discstamp Logo" width="200" height="200">
</p>

<h1 align="center">discstamp</h1>

<p align="center">
  <strong>A Versatile Timestamp Converter for Discord</strong>
</p>

<p align="center">
  A powerful npm package to effortlessly convert various timestamp formats into Discord UNIX timestamps.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/discstamp"><img src="https://img.shields.io/npm/v/discstamp.svg" alt="npm version"></a>
  <a href="https://github.com/WaltDisneyWorld/discstamp/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/discstamp.svg" alt="license"></a>

</p>

<br>

## Installation

To install discstamp, use npm:

```bash
npm install discstamp
```

## Usage

Using discstamp is incredibly straightforward. This section provides you with detailed examples on how to convert various timestamp formats to Discord UNIX timestamps.

### Basic Example

Let's begin with a simple example using an ISO 8601 timestamp. Simply import the `discstamp` module and call the `iso` function with the timestamp you want to convert:

```javascript
const discstamp = require('discstamp');

const isoTimestamp = '2023-08-27T19:45:00';
const discordTimestampFromIso = discstamp.iso(isoTimestamp);
console.log(discordTimestampFromIso);

```
#### AM/PM Format
You can also convert timestamps in the AM/PM format. Provide the time along with the period (AM/PM), followed by the timezone to the ampm function:
  
```
const discstamp = require('discstamp');
const amPmTimestampWithTimezone = '08:30 AM EST';
const discordTimestampFromAmPm = discstamp.ampm(amPmTimestampWithTimezone);
console.log(discordTimestampFromAmPm);
```
## Supported Timezones
Many timezones are supported, some of them, with their code are listed below:

### American Timezones
| Timezone Name                     | Timezone Code | Offset    |
|-----------------------------------|---------------|-----------|
| Eastern Standard Time             | EST           | UTC-5     |
| Central Standard Time             | CST           | UTC-6     |
| Mountain Standard Time            | MST           | UTC-7     |
| Pacific Standard Time             | PST           | UTC-8     |
| Alaska Standard Time              | AKST          | UTC-9     |
| Hawaii-Aleutian Standard Time     | HST           | UTC-10    |
| Brasília Time                     | BRT           | UTC-3     |
| Argentina Time                    | ART           | UTC-3     |

### European Timezones

| Timezone Name                     | Timezone Code | Offset    |
|-----------------------------------|---------------|-----------|
| Central European Time             | CET           | UTC+1     |
| Eastern European Time             | EET           | UTC+2     |
| Western European Time             | WET           | UTC+0     |
| Irish Standard Time               | IST           | UTC+0     |
| Greenwich Mean Time               | GMT           | UTC+0     |
| Coordinated Universal Time        | UTC           | UTC+0     |
| British Summer Time               | BST           | UTC+1     |
| Central European Summer Time      | CEST          | UTC+2     |
| Eastern European Summer Time      | EEST          | UTC+3     |
| Moscow Standard Time              | MSK           | UTC+3     |
| Central European Time (Croatia)   | CET           | UTC+1     |
| Eastern European Time (Estonia)   | EET           | UTC+2     |
| Western European Time (Portugal)  | WET           | UTC+0     |
| Central European Time (Spain)      | CET           | UTC+1     |
| Eastern European Time (Finland)    | EET           | UTC+2     |
| Central European Time (Norway)     | CET           | UTC+1     |
| Eastern European Time (Romania)    | EET           | UTC+2     |
| Central European Time (Switzerland)| CET           | UTC+1     |
| Eastern European Time (Turkey)     | EET           | UTC+3     |

### Middle Eastern Timezones
| Timezone Name          | Timezone Code | Offset    |
|------------------------|---------------|-----------|
| Arabia Standard Time    | AST           | UTC+3     |
| Israel Standard Time    | ISST           | UTC+2     |
| Turkey Time             | TRT           | UTC+3     |
| Iran Standard Time      | IRST          | UTC+3:30  |
| Iraq Standard Time      | AST           | UTC+3     |
| United Arab Emirates Standard Time | GST | UTC+4     |
| Qatar Standard Time     | AST           | UTC+3     |
| Oman Standard Time      | GST           | UTC+4     |
| Kuwait Standard Time    | AST           | UTC+3     |
| Bahrain Standard Time   | AST           | UTC+3     |
| Yemen Standard Time     | AST           | UTC+3     |
| Jordan Standard Time    | EET           | UTC+2     |
| Lebanon Standard Time   | EET           | UTC+2     |
| Syria Standard Time     | EET           | UTC+2     |
| Palestine Standard Time | EET           | UTC+2     |
### Asian Timezones
| Timezone Name                 | Timezone Code | Offset    |
|-------------------------------|---------------|-----------|
| China Standard Time           | CST           | UTC+8     |
| Japan Standard Time           | JST           | UTC+9     |
| Korea Standard Time           | KST           | UTC+9     |
| India Standard Time           | IST           | UTC+5:30  |
| Pakistan Standard Time        | PKT           | UTC+5     |
| Bangladesh Standard Time      | BST           | UTC+6     |
| Southeast Asia Time           | SGT           | UTC+8     |
| Australia Western Standard Time| AWST          | UTC+8     |
| Hong Kong Time                | HKT           | UTC+8     |
| Indochina Time                | ICT           | UTC+7     |

### Oceanian Timezones
| Timezone Name                     | Timezone Code | Offset    |
|-----------------------------------|---------------|-----------|
| Australian Eastern Time           | AET           | UTC+11    |
| Australian Central Time           | ACT           | UTC+10:30  |
| Australian Central Standard Time  | ACST          | UTC+9:30   |
| Australian Western Standard Time  | AWST          | UTC+8     |
| Fiji Standard Time                | FJT           | UTC+12    |
| New Zealand Standard Time         | NZST          | UTC+12    |
| New Zealand Daylight Time         | NZDT          | UTC+13    |
| Papua New Guinea Time             | PGT           | UTC+10    |
| Solomon Islands Time              | SBT           | UTC+11    |
| Vanuatu Standard Time             | VUT           | UTC+11    |
| Wallis and Futuna Time            | WFT           | UTC+12    |
| Norfolk Island Time               | NFT           | UTC+11:30 |
| Tonga Standard Time               | TOT           | UTC+13    |
| Samoa Standard Time               | SST           | UTC-11    |
| Tokelau Time                      | TKT           | UTC+13    |
| Tuvalu Time                       | TVT           | UTC+12    |

#### Long Date Format
Converting timestamps in long date format is just as easy:
```
const discstamp = require('discstamp');
const longDateTimestamp = 'August 27, 2023 19:45:00 UTC';
const discordTimestampFromLongDate = discstamp.longdate(longDateTimestamp);
console.log(discordTimestampFromLongDate);
```
#### Custom Formats

discstamp supports an array of other formats as well, including DD/MM/YYYY, MM/DD/YYYY, Human-Readable Textual Formats, Julian Date, and more. Each format has its own corresponding function that you can use similarly to the examples above.

Experiment with different formats and timestamps to see how discstamp can seamlessly integrate timestamp conversions into your projects!

For more details on supported formats and functions, refer to the Supported Formats section.

Feel free to share your usage examples and innovative timestamp conversions with the discstamp community!

Feel free to share your usage examples and innovative timestamp conversions with the discstamp community!

## Contributing
We encourage contributions from the community! To get involved, please follow our contribution guidelines.
##  License
This project is licensed under the MIT License.




<hr />
<p align="center">
  Made with ❤️ by Matt & Caleb  
  
</p>

