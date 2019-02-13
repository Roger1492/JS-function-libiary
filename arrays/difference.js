/**
 * @description 从array数组返回other数组中没有的值
 *   * @since 0.1.0
 * @param {Array} array
 * @param {Array} other
 * @returns {Array}
 * @author Roger Shen
 */

function difference(arr, oth) {
  var nArr = [];
  arr.forEach((item, index, arr) => {
    if (!oth.includes(item)) {
      nArr.push(item);
    }
  })
  return nArr;
}

var a = ['a', 'b', 'c', 'd', 3];
var b = [1, 2, 3, 4, 5, 6, 'd'];
console.log(difference(a, b));