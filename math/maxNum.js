/**
 * 
 * @author Roger Shen
 * @since 0.1.0
 * @desc 找出数组中的最大数
 * @param {Array || Number}     数组或者数字序列
 * @return {Number}
 * 
 * @example
 * => let a = [1,2,894,3,4,5,6,7,333];
 * => console.log(maxNum(a));
 * 
 */

// 函数的apply方法实现
function maxNum(arr) {
    return Math.max.apply(null, arr);
}

// 函数的 call 方法和spread方法实现，
function maxNum(...num){
    return Math.max.call(null, ...num);
}