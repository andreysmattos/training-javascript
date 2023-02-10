/**
 * The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.
 * Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
 *
 * Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
 *
 * The following are examples of expected output values:
 *
 * rgb(255, 255, 255) // returns FFFFFF
 * rgb(255, 255, 300) // returns FFFFFF
 * rgb(0,0,0) // returns 000000
 * rgb(148, 0, 211) // returns 9400D3
 *
 */

/*
1 = 1
11
*/

const change = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

function decimalToHex(decimal) {
  let div = decimal;
  let hexs = [];

  if (div < 1) return "00";
  if (div > 254) return "FF";

  while (div > 0) {
    const remainder = div % 16;
    div = Math.floor(div / 16);

    let hex = change[remainder] ? change[remainder] : remainder;

    hexs.push(hex);
  }

  if (hexs.length === 1) hexs.push("0");
  return hexs.reverse().join("");
}

function rgb(r, g, b) {
  return decimalToHex(r) + decimalToHex(g) + decimalToHex(b);
}



// Alternative
function rgb(r, g, b){
	return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}
