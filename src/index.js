module.exports = function toReadable (number) {
  const FIRST_TEN = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const TENS = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const SECOND_TEN = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const separateNumber = String(number).split('');

  if (separateNumber.length === 1) {
    return FIRST_TEN[number];
  }

  if (separateNumber.length === 3) {
    const hundred = `${FIRST_TEN[separateNumber[0]]} hundred`
    if (separateNumber[1] === '0' && separateNumber[2] === '0') {
      return hundred;
    } else if (separateNumber[1] !== '0' && separateNumber[2] === '0') {
      return `${hundred} ${TENS[separateNumber[1] - 1]}`;
    } else if (separateNumber[1] !== '0' && separateNumber[2] !== '0') {
      if (separateNumber[1] === '1') {
        return `${hundred} ${SECOND_TEN[separateNumber[2]]}`;
      } else {
        return `${hundred} ${TENS[separateNumber[1] - 1]} ${separateNumber[2] === '0' ? '' : FIRST_TEN[separateNumber[2]]}`;
      }
    } else if (separateNumber[1] === '1') {
      return `${hundred} ${SECOND_TEN[separateNumber[2]]}`;
    } else {
      return `${hundred} ${FIRST_TEN[separateNumber[2]]}`;
    }
  }

  if (separateNumber.length === 2) {
    if (separateNumber[0] !== '0' && separateNumber[1] === '0') {
      return TENS[separateNumber[0] - 1];
    } else if (separateNumber[0] === '1') {
      return SECOND_TEN[separateNumber[1]];
    } else {
      return `${TENS[separateNumber[0] - 1]} ${separateNumber[1] === '0' ? '' : FIRST_TEN[separateNumber[1]]}`;
    }
  }
}
