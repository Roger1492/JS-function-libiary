/**
 * @description n项数组合并
 * @author Roger Shen
 * @version 0.1.1
 * 
 * @param {*} arr 数组
 * @param  {...any} rest 剩下的n项数组
 * @return {Array} 新数组
 */

function mergeArray(arr, ...rest){
  return arr.concat(...rest);
}