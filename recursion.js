/**
 * @desc 递归函数
 * @param {Number}
 * @return {Number}
 */
function recursion(n) {
    return (n === 0 || n === 1) ? 1 : n * recursion(n - 1);
}