/**
 * 数字转字符串
 * @param {number} number 传入数字（十进制）
 * @param {number} x 转成相应进制的数字
 * @return {string}
 */
function convertNumberToString(number, x = 10) {
  // 取出整数部分
  let integer = Math.floor(number);
  // 取出小数部分
  let decimal = number - integer;
  let string = !integer ? '0' : '';
  // 处理整数部分
  while (integer > 0) {
    string = `${integer % x}${string}`;
    integer = Math.floor(integer / x);
  }
  // 处理小数部分
  if (decimal) {
    string += '.';
    while (decimal && !/\.\d{20}$/.test(string)) { // 最大保留20位小数
      decimal *= x;
      string += `${Math.floor(decimal)}`;
      decimal -= Math.floor(decimal);
    }
  }
  return string;
}

/**
 * 字符串转数字
 * @param {string} chars 传入字符串
 * @param {number} x 字符串转成数字的的进制
 * @return {number} 输出十进制数字
 */
function convertStringToNumber(chars, x = 10) {
  // 验证合法
  if (!/^(0\.?|0?\.\d+|[1-9]\d*\.?\d*?)$/.test(chars)) {
    throw Error(`${chars} 并不是一个合法的数字`);
  }
  const zeroCodePoint = '0'.codePointAt(0);
  let integer = 0;
  let i = 0;
  for (; i < chars.length && chars[i] !== '.'; i++) {
    integer *= x;
    integer += chars[i].codePointAt(0) - zeroCodePoint;
  }

  let decimal = 0;
  for (let j = chars.length - 1; i < j; j--) {
    decimal += chars[j].codePointAt(0) - zeroCodePoint;
    decimal /= x;
  }
  return integer + decimal;
}