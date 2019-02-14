/**
 * 
 * 删除所有数组元素为falsy - (false,NaN,'',0,undefined) 的值。
 * 
 * @since 0.1.0
 * @param {Array} array 原始数组
 * @returns {Array} array 删除所有无效元素的新数组
 * @author Roger Shen
 * 
 * @example 
 * compact([4,'tes',null, undefined,'of', '', NaN])
 * // => [ 4, 'tes', 'of' ]
 * 
 */

function compact(arr) {
  let nArr = [];
  arr.forEach((item, index, arr) => {
    if (Boolean(item) === true) {
      nArr.push(item);
    }
  })
  return nArr;
}