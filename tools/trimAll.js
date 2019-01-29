/**
 * @desc 去除字符串中的所有空格
 * @param {String}
 * @return {Number}
 * @version 0.1.0
 * @author Roger Shen
 * 
 * @example
 * => console.log(trim(" 534 jgfids 9fas0 f sd   "));
 * => 534jgfids9fas0fsd
 */

 // 普通函数实现
 function trim(str){
    return str.replace(/\s/g, '');
 }

 console.log(trim(" 534 jgfids 9fas0 f sd   "));