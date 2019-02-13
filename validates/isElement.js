/**
 * 
 * @description 判断是否为元素类型
 * @version 0.1.0
 * @author Roger Shen
 * @param {Element} obj 
 * @return {Boolean}
 */

function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}