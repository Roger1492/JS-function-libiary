/**
 * @desc 去除字符串中的空格
 * @param {String}
 * @return {Number}
 */

 // 普通函数实现
 function trim(str){
     return str.replace(/\s/g, "")
 }

 // 箭头函数实现
 var trim = str => str.replace(/\s/g, "");

console.log(trim(" 534 jgfids 9fas0 f sd   "));