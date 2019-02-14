/**
 * @description 返回第n项的斐波那契数列
 * @author Roger Shen
 * @version 0.1.0
 * @param {Number} 第n项
 * @return {Number} 第n项的数值
 * 
 * @example
 * => console.log(fib(10))
 * => // 55
 */

function fib(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}