function toDiscordTimestampFromIso(isoTimestamp) {
    const unixTimestamp = Math.floor(new Date(isoTimestamp).getTime() / 1000);
    return `<t:${unixTimestamp}>`;
  }
  
  function toDiscordTimestampFromRfc2822(rfc2822Timestamp) {
    const unixTimestamp = Math.floor(new Date(rfc2822Timestamp).getTime() / 1000);
    return `<t:${unixTimestamp}>`;
  }
  
  function toDiscordTimestampFromUnix(unixTimestamp) {
    return `<t:${Math.floor(unixTimestamp)}>`;
  }
  
  function amPmToDiscordTimestamp(amPmTimestampWithTimezone) {
    // Step 2: Extract time, AM/PM, and timezone from the input string
    const match = amPmTimestampWithTimezone.match(/(\d{1,2}:\d{2})\s*([APMapm]{2})\s*(.+)/);
  
    if (match) {
      const [_, time, rawAmPm, timezone] = match;
  
     // console.log(`Step 2: Extracted time=${time}, amPm=${rawAmPm}, timezone=${timezone}`);
  
      // Extract hours, minutes, and amPm from the time string
      const [hours, minutes] = time.split(/[:\s]+/);
  
      // Convert hours to 24-hour format
      const amPm = (rawAmPm.toLowerCase() === 'pm' && hours !== '12') ? 'PM' : 'AM';
      const adjustedHours = (amPm === 'PM' && hours !== '12') ? parseInt(hours) + 12 : parseInt(hours);
  
      // Step 3 (continued): Combine time, AM/PM, and timezone to create a formatted timestamp
      const now = new Date();
      const year = now.getUTCFullYear();
      const month = now.getUTCMonth() + 1;
      const day = now.getUTCDate();
      const formattedTimestamp = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}T${adjustedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00${getTimezoneOffset(timezone)}`;
  
    //  console.log(`Step 3 (continued): Formatted timestamp=${formattedTimestamp}`);
  
      // Step 5: Convert the formatted timestamp to Unix timestamp
      const unixTimestamp = Math.floor(new Date(formattedTimestamp).getTime() / 1000);
  
    //  console.log(`Step 5: Unix timestamp=${unixTimestamp}`);
  
      // Step 1: Format Unix timestamp as a Discord timestamp
      const discordTimestamp = `<t:${unixTimestamp}>`;
  
    //  console.log(`Step 1: Discord timestamp=${discordTimestamp}`);
  
      return discordTimestamp;
    } else {
      console.error('Invalid input format');
      return 'Invalid input format';
    }
  }
  
  // Function to get timezone offset
  function getTimezoneOffset(timezone) {
    const timezones = {
        'ACDT': 10.5, 'ACST': 9.5, 'ACT': -5, 'AEDT': 11, 'AEST': 10, 
         'EST': -5, 'PST': -8, 'GMT': 0, 'UTC': 0, 
        'Alfa': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 
        'H': 8, 'I': 9, 'K': 10, 'L': 11, 'M': 12, 'N': -1, 'O': -2, 'P': -3, 'Q': -4, 'R': -5, 'S': -6, 'T': -7, 'U': -8, 'V': -9,
         'W': -10, 'X': -11, 'Y': -12, 'ACWST': 8.75, 'AFT': 4.5, 'AKDT': -8, 'AKST': -9, 'ALMT': 6, 'AMST': -3, 'AMT': -4, 'ANAST': 12, 
         'ANAT': 12, 'AQTT': 5, 'ART': -3, 'AST': 3, 'AT': -4, 'AWDT': 9, 'AWST': 8, 'AZOST': 0, 'AZOT': -1, 'AZST': 5, 'AZT': 4, 'AoE': -12, 'BNT': 8, 'BOT': -4,
          'BRST': -2, 'BRT': -3, 'BST': 6, 'BTT': 6, 'CAST': 8, 'CAT': 2, 'CCT': 6.5, 'CDT': -5, 'CEST': 2, 'CET': 1, 'CHADT': 13.75, 'CHAST': 12.75, 'CHOST': 9,
           'CHOT': 8, 'CHUT': 10, 'CIDST': -4, 'CIST': -5, 'CKT': -10, 'CLST': -3, 'CLT': -4, 'COT': -5, 'CST': -6, 'CT': 8, 'CVT': -1, 'CXT': 7, 'DAVT': 7, 
           'DDUT': 10, 'EASST': -5, 'EAST': -6, 'EAT': 3, 'ECT': -5, 'EDT': -4, 
           'EEST': 3, 'EET': 2, 'EGST': 0, 'EGT': -1, 'EST': -5, 'ET': -5, 'FET': 3, 'FJST': 13, 'FJT': 12, 'FKST': -3, 'FKT': -4, 'FNT': -2, 'GET': 4, 
           'GFT': -3, 'GILT': 12, 'GMT': 0, 'GST': 4, 'GYT': -4, 'HDT': -9, 'HKT': 8, 'HOVST': 8, 'HOVT': 7, 'HST': -10, 'ICT': 7, 'IDT': 3, 'IOT': 6, 'IRDT': 4.5, 'IRKST': 9, 'IRKT': 8, 'IRST': 3.5, 'IST': 5.5,'ISST': 2, 'JST': 9, 'KGT': 6, 
           'KOST': 11, 'KRASST': 8, 'KRAST': 8, 'KST': 9, 'KUYT': 4, 'LHDT': 11, 'LHST': 10.5, 'LINT': 14, 'MAGST': 12, 'MAGT': 11, 'MART': -9.5, 'MAWT': 5, 'MDT': -6, 'MET': 1, 'MHT': 12, 'MMT': 6.5, 'MSD': 4, 'MSK': 3, 'MST': -7, 'MUT': 4,
            'MVT': 5, 'MYT': 8, 'NCT': 11, 'NDT': -2.5, 'NFDT': 12, 'NFT': 11, 'NOVST': 7, 'NOVT': 7, 'NPT': 5.75, 'NST': -3.5, 'NUT': -11, 'NZDT': 13, 'NZST': 12, 'OMSST': 7, 'OMST': 6, 'ORAT': 5, 'PDT': -7, 'PET': -5, 'PETST': 12, 'PETT': 12, 'PGT': 10, 
            'PHOT': 13, 'PHT': 8, 'PKT': 5, 'PMDT': -2, 'PMST': -3, 'PONT': 11, 'PST': -8, 'PT': -8, 'PWT': 9, 'PYST': -3, 'PYT': -4, 'PYT': 8.5, 'QYZT': 6, 'RET': 4, 'ROTT': -3, 'SAST': 2, 'SBT': 11, 'SCT': 4, 'SGT': 8, 'SLST': 5.5, 'SRET': 11, 'SRT': -3, 'SST': -11, 'SYOT': 3, 'TAHT': -10, 'THA': 7, 'TFT': 5, 'TJT': 5, 'TKT': 13, 
            'TLT': 9, 'TMT': 5, 'TOT': 13, 'TRT': 3, 'TVT': 12, 'ULAST': 9, 'ULAT': 8, 'UTC': 0, 'UYST': -2, 'UYT': -3, 'UZT': 5, 'VET': -4, 'VLAST': 11, 'VLAT': 10, 'VOST': 6, 'VUT': 11, 'WAKT': 12, 'WARST': -3, 'WAST': 2, 'WAT': 1, 'WEST': 1, 'WET': 0, 'WFT': 12, 'WGST': -2, 'WGT': -3, 'WIB': 7, 'WIT': 9, 'WITA': 8,
             'WST': 13, 'WSST': 2, 'WT': 0, 'YAKST': 10, 'YAKT': 9, 'YAPT': 10, 'YEKST': 6, 'YEKT': 5, 'Z': 0,
      };
  
    const offset = timezones[timezone];
    if (offset !== undefined) {
      const sign = offset >= 0 ? '+' : '-';
      const hours = Math.floor(Math.abs(offset));
      const minutes = Math.round((Math.abs(offset) % 1) * 60);
      return `${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    } else {
      console.error('Invalid timezone abbreviation');
      return '';
    }
  }

  function toDiscordTimestampFromDdMmYyyy(ddMmYyyyTimestamp) {
    const [day, month, year] = ddMmYyyyTimestamp.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    return `<t:${unixTimestamp}>`;
  }
  
  function toDiscordTimestampFromMmDdYyyy(mmDdYyyyTimestamp) {
    const [month, day, year] = mmDdYyyyTimestamp.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    return `<t:${unixTimestamp}>`;
  }
  
  function toDiscordTimestampFromHumanReadable(humanReadableTimestamp) {
    const date = new Date(humanReadableTimestamp);
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    return `<t:${unixTimestamp}>`;
  }
  
  function toDiscordTimestampFromJulian(julianTimestamp) {
    const julianDay = parseFloat(julianTimestamp);
    const unixTimestamp = Math.floor((julianDay - 2440587.5) * 86400);
    return `<t:${unixTimestamp}>`;
  }
  
  function toDiscordTimestampFromLongDate(longDateTimestamp) {
    const date = new Date(longDateTimestamp);
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    return `<t:${unixTimestamp}>`;
  }
  
  
  module.exports = {
    iso: toDiscordTimestampFromIso,
    rfc2822: toDiscordTimestampFromRfc2822,
    unix: toDiscordTimestampFromUnix,
    ampm: amPmToDiscordTimestamp,
    ddmmyyyy: toDiscordTimestampFromDdMmYyyy,
    mmddyyyy: toDiscordTimestampFromMmDdYyyy,
    human: toDiscordTimestampFromHumanReadable,
    julian: toDiscordTimestampFromJulian,
    longdate: toDiscordTimestampFromLongDate,
  };
  