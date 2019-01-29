/**
 * 
 * 返回集合的长度或者是可迭代字符串的长度
 * 
 * @since 0.1.0
 * @param {*} 
 * @returns {Number}
 * @author Roger Shen
 * 
 * @example
 * size("Hello,world")
 * // => 11
 * size(["one","two","three","four"])
 * // => 4
 * size({a:"one",b:"two",c:"three"})
 * // => 3
 * 
 */

function size(n) {
  // 两种实现都可以
  return Array.from(Object.keys(n)).length;
  // return Object.keys(n).length;
};