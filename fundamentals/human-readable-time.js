/**
 * Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
 *
 * - HH = hours, padded to 2 digits, range: 00 - 99
 * - MM = minutes, padded to 2 digits, range: 00 - 59
 * - SS = seconds, padded to 2 digits, range: 00 - 59
 * The maximum time never exceeds 359999 (99:59:59)
 *
 */

function humanReadable(seconds) {
  const date = new Date(seconds * 1000).toISOString();
  const days = Number(date.slice(8, 10)) - 1;

  let [_hours, _minutes, _seconds] = date.slice(11, 19).split(":");

  _hours = String(Number(_hours) + days * 24);

  return `${_hours.padStart(2, "0")}:${_minutes}:${_seconds}`;
}

console.log(humanReadable(0));
