/**
 * @description 阶乘
 * @example 5!=5*4*3*2*1
 * @param {Number}
 * @return {Number}
 */

function fac(n){
    let result = 1;
    for(let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}

console.log(fac(5));