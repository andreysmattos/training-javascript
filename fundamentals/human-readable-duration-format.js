/**
 *
 * Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
 *
 * The function must accept a non-negative integer. If it is zero, it just returns "now".
 * Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
 *
 * It is much easier to understand with an example:
 * * For seconds = 62, your function should return
 *     "1 minute and 2 seconds"
 * * For seconds = 3662, your function should return
 *     "1 hour, 1 minute and 2 seconds"
 *
 *
 * For the purpose of this Kata, a year is 365 days and a day is 24 hours.
 * Note that spaces are important.
 *
 *
 * Detailed rules
 * The resulting expression is made of components like 4 seconds, 1 year, etc.
 * In general, a positive integer and one of the valid units of time,
 * separated by a space. The unit of time is used in plural if the integer is greater than 1.
 *
 * The components are separated by a comma and a space (", ").
 * Except the last component, which is separated by " and ", just like it would be written in English.
 *
 * A more significant units of time will occur before than a least significant one.
 * Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
 *
 * Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
 *
 * A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
 *
 * A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
 *
 */

const timeMap = {
  year: 60 * 60 * 24 * 365,
  day: 60 * 60 * 24,
  hour: 60 * 60,
  minute: 60,
};

function formatDuration(seconds) {
  if (seconds === 0) return "now";

  const years = Math.floor(seconds / timeMap.year);
  const days = Math.floor((seconds % timeMap.year) / timeMap.day);
  const hours = Math.floor(
    ((seconds % timeMap.year) % timeMap.day) / timeMap.hour
  );
  const minutes = Math.floor(
    (((seconds % timeMap.year) % timeMap.day) % timeMap.hour) / timeMap.minute
  );
  const _seconds = Math.floor(
    (((seconds % timeMap.year) % timeMap.day) % timeMap.hour) % timeMap.minute
  );

  const messages = [];

  if (years) {
    messages.push(`${years} year${years > 1 ? "s" : ""}`);
  }

  if (days) {
    messages.push(`${days} day${days > 1 ? "s" : ""}`);
  }
  if (hours) {
    messages.push(`${hours} hour${hours > 1 ? "s" : ""}`);
  }
  if (minutes) {
    messages.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
  }
  if (_seconds) {
    messages.push(`${_seconds} second${_seconds > 1 ? "s" : ""}`);
  }

  let message;

  if (messages.length > 1) {
    message = messages.slice(0, -1).join(", ") + " and " + messages.at(-1);
  } else {
    message = messages.at(-1);
  }

  return message;
}


// Alternative:

function formatDuration (seconds) {
    var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
        res = [];
  
    if (seconds === 0) return 'now';
    
    for (var key in time) {
      if (seconds >= time[key]) {
        var val = Math.floor(seconds/time[key]);
        res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
        seconds = seconds % time[key];
      }
    }
   
    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}
