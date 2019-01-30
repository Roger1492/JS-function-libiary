/**
 * @description 返回数组索引为index的元素，如果是负数，则返回倒数的索引。
 * @author Roger Shen
 * @version 0.1.0
 * @param {Array}
 * @param {Number}
 * @return {*}
 * 
 * @example
 * => console.log(nth(['a','b','c','f','g','h','j','u'],4))
 * => 'g'
 * 
 */

function nth(array, index) {
  if (index >= 0) {
    return array[index];
  } else {
    return array[array.length - Math.abs(index)]
  }
};