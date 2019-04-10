/**
 * 
 * @description 敏感词处理
 * @author Roger Shen
 * @version 0.1.0
 * @param {Array} blacklist 敏感词数组
 * @param {String} text 原文
 * @param {String} stragegy 替换策略
 * @return {String}
 */


function sensitive(blacklist, text, stragegy='**'){
  return text.replace(new RegExp(blacklist.join('|'),'g'), stragegy);
}