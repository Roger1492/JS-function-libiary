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
 * 
 * => console.log(flatten([[1,2,3],[6,7,['a',['c']],8]]))
 * => [ 1, 2, 3, 6, 7, 'a', 'c', 8 ]
*/

function flatten(arr){
    
    // 1,这个方法只能复制一层
    // return arr.reduce((a,b) => a.concat(b));

    // 2,这个可以递归复制n层
    while(arr.some((item,index,arr) => Array.isArray(item))){
        arr = [].concat(...arr);
    }
    return arr;

}