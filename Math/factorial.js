/**
 * @description 阶乘(递归函数)
 * @param {Number}
 * @return {Number}
 * @author Roger Shen
 * @version 0.1.0
 */

// 第一种方法：
function fac(n) {
    return (n === 0 || n === 1) ? 1 : n * fac(n - 1);
}

// 第二种方法：
// function fac(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// 第三种方法：
// function fac(num) {
//     return (num === 0 || num === 1) ? 1 : num * arguments.callee(num - 1);
// }