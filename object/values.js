/**
 * @description 返回对象的value
 * @version 0.1.1
 * @author Roger Shen
 * 
 * @param {Object}
 * @return {Array}
 */

 
function values(obj) {
  let arr = [];
  for (o in obj) {
    arr.push(obj[o]);
  }
  return arr;
}