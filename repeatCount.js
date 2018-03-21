/**
 * @desc 统计一串字符中相同字符出现的次数
 * @param {String} 输入一串字符
 * @return {Object} 输出重复字符出现的次数
 */

 function repeatCount(str){
     return str.split('').reduce((p,k) => (p[k]++ || (p[k] = 1), p),{})
 }
 