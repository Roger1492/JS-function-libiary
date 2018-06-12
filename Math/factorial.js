/**
 * @description 阶乘(递归函数)
 * @example 5!=5*4*3*2*1
 * @param {Number}
 * @return {Number}
 */

// 第一种方法：
function recursion(n) {
    return (n === 0 || n === 1) ? 1 : n * recursion(n - 1);
}

// 第二种方法：
function fac(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 第三种方法：
function factorial(num) {
    return (num === 0 || num === 1) ? 1 : num * arguments.callee(num - 1);
}

console.log(factorial(10));