module.exports = function toReadable (number) {
  
  let digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  switch (true) {
    case number < 20:
      return digits[number];
      break;
    
    case number >= 20 && number < 100 && number%10 === 0:
      return `${tens[Math.floor(number/10) - 2]}`;
      break;
    
    case number >= 20 && number < 100:
      return `${tens[Math.floor(number/10) - 2]} ${digits[number%10]}`;
      break;
    
    case number%100 === 0:
      return `${digits[Math.floor(number/100)]} hundred`;
      break;

    case number > 100 && number%100<20:
      return `${digits[Math.floor(number/100)]} hundred ${digits[number%100]}`;
      break;

    case number > 100 && number%10===0:
      return `${digits[Math.floor(number/100)]} hundred ${tens[Math.floor((number%100)/10) - 2]}`;
      break;

    case number >= 100:
      return `${digits[Math.floor(number/100)]} hundred ${tens[Math.floor((number%100)/10) - 2]} ${digits[number%10]}`;
      break;
    }
}