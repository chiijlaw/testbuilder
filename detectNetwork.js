// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var first1 = cardNumber.substring(0,1);
  var first2 = cardNumber.substring(0,2);
  var first3 = cardNumber.substring(0,3);
  var first4 = cardNumber.substring(0,4);
  var first6 = cardNumber.substring(0,6);
  var visaOrSwitch = "No Card Number";

  if ((first2 === "38" || first2 === "39") && cardNumber.length === 14) {
    return "Diner\'s Club";
  }
  if ((first2 === "34" || first2 === "37") && cardNumber.length === 15) {
    return "American Express";
  }
  if (first1 === "4" && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)){
    visaOrSwitch = "Visa";
  }
  if (parseInt(first2) >= 51 && parseInt(first2) <= 55 && cardNumber.length === 16) {
    return "MasterCard";
  }
  if ((first4 === "6011" || (parseInt(first3) >= 644 && parseInt(first3) <= 649) ||
   first2 === "65") && (cardNumber.length === 16 || cardNumber.length === 19)) {
    return "Discover";
  }
  if ((first4 === "5018" || first4 === "5020" || first4 === "5038" || first4 === "6304") &&
    (cardNumber.length >= 12 && cardNumber.length <= 19)) {
    return "Maestro";
  }
  if ((first4 === "4903" || first4 === "4905" || first4 === "4911" || first4 === "4936" ||
    first6 === "564182" || first6 === "633110" || first4 === "6333" || first4 === "6759") &&
    (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
    visaOrSwitch = "Switch";
    return "Switch";
  }
  if (((parseInt(first6) >= 622126 && parseInt(first6) <= 622925) || 
    (parseInt(first3) >= 624 && parseInt(first3) <= 626) || 
    (parseInt(first4) >= 6282 && parseInt(first4) <= 6288)) && (cardNumber.length >= 16 && cardNumber.length<= 19)) {
    return "China UnionPay";
  }

  return visaOrSwitch;
};

var maestroTest = function() {
  ['5018','5020','5038','6304'].forEach(function(element){
  for (var len = 12; len <= 19; len++) {
   var remove = 4+19-len;
   var end = '1234567890123456789'.slice(0,-remove);
   detectNetwork(element.concat(end));
  }
});
};
//maestroTest();
var discoverTest = function() {
  [16,19].forEach(function(len){
    for (var prefix = 644; prefix <= 649; prefix++) {
      var remove = 3+19-len;
      var end = '1234567890123456789'.slice(0,-remove);
      detectNetwork(prefix.toString().concat(end));
    }
  });
};
var chinaTest = function() {
  for (var len = 16; len <= 19; len++) {
    for (var prefix1 = 622126; prefix1 <= 622925; prefix1++) {
      var remove = 6+19-len;
      var end = '1234567890123456789'.slice(0,-remove);
        detectNetwork((prefix1 + '').concat(end));
      }
    for (var prefix2 = 624; prefix2 <= 626; prefix2++) {
      var remove = 3+19-len;
      var end = '1234567890123456789'.slice(0,-remove);
        detectNetwork((prefix2 + '').concat(end));
      }
    for (var prefix1 = 6282; prefix1 <= 6288; prefix1++) {
      var remove = 4+19-len;
      var end = '1234567890123456789'.slice(0,-remove);
        detectNetwork((prefix1 + '').concat(end));
      }
  }
};
//chinaTest();