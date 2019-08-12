/**
 * @description 将一个字符串装换为‘驼峰’命名法的新名字，如果已经是了，则什么也不变
 * @author Roger Shen
 * @version 0.1.1
 * 
 * @param {String} str 字符串
 * @return {String}
 * 
 * @example
 * => console.log(camelCase('hello-world'));
 * => helloWorld
 */

function camelCase(str){
  return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : ''})
}