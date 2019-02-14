/**
 * 
 * @author Roger Shen
 * @since 0.1.0
 * @desc 找出数组中的最小数
 * @param {Array || Number}     数组或者数字序列
 * @return {Number}
 * 
 * @example
 * => let a = [1,2,894,3,4,5,6,7,333];
 * => console.log(minNum(a));
 * 
 */

function minNum(arr) {
  return Math.min.apply(null, arr);
}