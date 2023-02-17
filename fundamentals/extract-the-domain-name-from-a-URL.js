/**
 * Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
 *
 * * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
 * * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
 * * url = "https://www.cnet.com"                -> domain name = cnet"
 *
 */

function domainName(url) {
  let result = url.replace(/.*www.|.+\/\//, "");
  result = result.replace(/\..+/, "");
  return result;
}

// Alternative:
function domainName(url) {
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
