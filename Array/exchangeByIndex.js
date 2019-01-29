/**
 * 
 * 通过索引交换数组中的两个值
 * 
 * @since 0.1.0
 * @param {Array} 
 * @param {*} index1 要交换的数组索引 index1
 * @param {*} index2 要交换的数组索引 index2
 * @returns {Array}
 * @author Roger Shen
 * 
 */

function exchangeByIndex(arr,index1,index2){
  [arr[index1],arr[index2]] = [arr[index2],arr[index1]];
  return arr;
}