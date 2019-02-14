/**
 * @author Roger Shen
 * @since 0.1.0
 * @description 二进制，十进制，十六进制相互转换
 * @param {Number}
 * @return {Number}
 */

// TODO: 考虑是否添加前缀0

// 2 -> 10
function two_to_10(num){
  return Number.parseInt(num, 2);
}

// 2 -> 16
function two_to_16(num){
  return Number.parseInt(num, 2).toString(16);
}

// 10 -> 2
function ten_to_2(num){
  return num.toString(2);
}

// 10 -> 16
function ten_to_16(num){
  return num.toString(16);
}

// 16 -> 2
function sixteen_to_2(num){
  return Number.parseInt(num, 16).toString(2);
}

// 16 -> 10
function sixteen_to_10(num){
  return Number.parseInt(num, 16);
}