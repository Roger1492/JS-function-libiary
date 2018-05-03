/**
 * @description 二维数组一维化(扁平化)
 * @param {Array} 
 * @return {Array}
*/

function flat(arr){
    return arr.reduce((a,b) => a.concat(b));
}
