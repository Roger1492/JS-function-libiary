/**
 * @description 二维数组一维化(扁平化)
 * @author Roger Shen
 * @version 0.1.0
 * @param {Array}
 * @return {Array}
 * 
 * @example
 * => console.log(flatten([[1,2,3],[6,7,8]]));
 * => [ 1, 2, 3, 6, 7, 8 ]
*/

function flatten(arr){
    return arr.reduce((a,b) => a.concat(b));
}