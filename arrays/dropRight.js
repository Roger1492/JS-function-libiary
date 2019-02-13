/**
 * 
 * 删除数组后面指定个数的元素
 * 
 * @since 0.1.0
 * @param {*} array 原始数组
 * @param {*} n 要删除的长度
 * @returns {Array} 返回新数组
 * @author Roger Shen
 * 
 * @example
 * 
 * dropRight([1,2,3,4,5,6,7,8], 2)
 * [ 1, 2, 3, 4, 5, 6 ]
 * 
 * dropRight([1,2,3,4,5,6,7,8], 10)
 * [ 1, 2, 3, 4, 5, 6 ]
 * 
 * dropRight([1,2,3,4,5,6,7,8], 0)
 * [ 1, 2, 3, 4, 5, 6, 7, 8 ]
 */

function dropRight(array, n = 1) {
  const len = array == null ? 0 : array.length;
  return array.slice(0, len - n);
};