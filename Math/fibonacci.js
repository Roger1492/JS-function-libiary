/**
 * @description 斐波那契数列
 * @param {Number} 想获得第几项的值
 * @return {Array} 返回那一列的斐波那契数列
 */

function fib(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}

console.log(fib(8))    // 1 1 2 3 5 8 13 21