/**
 * @description 二维数组一维化(扁平化)
 * @param {Array} 
 * @return {Array}
*/

// 普通函数写法
function flat(arr){
    return arr.reduce(function(a,b){
        return a.concat(b);
    })
}

// 肩头函数写法
function flat(arr){
    return arr.reduce((a,b) => a.concat(b));
}

// 例子
console.log(flat([[1,2,3],[6,7,8]]))