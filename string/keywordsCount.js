/**
 * 
 * @description 统计一段文本中指定文字出现的次数
 * @author Roger Shen
 * @version 0.1.1
 * 
 * @param {Text} text 一段文本
 * @param {*} keywrods 关键字
 * @return {Number}
 */

function keywordsCount(text, keywrods){
  return text.split(keywrods).length - 1;
}