/**
 * @description 返回对象的key
 * @version 0.1.1
 * @author Roger Shen
 * 
 * @param {Object}
 * @return {Array}
 */

function keys(obj) {
  let arr = [];
  for (o in obj) {
    arr.push(o);
  }
  return arr;
}