/**
 * 
 * 删除数组前面指定个数的元素
 * 
 * @version 0.1.0
 * @param {Array} array 原始数组
 * @param {Array} n 要删除的长度
 * @returns {Array} 返回新数组
 * @author Roger Shen
 * 
 * @example 
 * drop([1,2,3,4,5,6,7,8] ,0)
 * // => [ 1, 2, 3, 4, 5, 6, 7, 8 ]
 *
 * drop([1,2,3,4,5,6,7,8], 1)
 * // => [ 2, 3, 4, 5, 6, 7, 8 ]
 * 
 * drop([1,2,3,4,5,6,7,8], 4)
 * // => [ 5, 6, 7, 8 ]
 * 
 * drop([1,2,3,4,5,6,7,8], 10)
 * // => []
 */
function drop(array, n = 1) {
  return array.slice(n);
};