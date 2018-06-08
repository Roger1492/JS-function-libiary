/**
 * @description 阶乘(递归函数)
 * @example 5!=5*4*3*2*1
 * @param {Number}
 * @return {Number}
 */

function recursion(n) {
    return (n === 0 || n === 1) ? 1 : n * recursion(n - 1);
}

function fac(n){
    let result = 1;
    for(let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}

console.log(fac(10));