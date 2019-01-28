/**
 *
 * @description 数组去重
 * @param {Array}   输入原始数组
 * @return {Array}  输出去重后的数组
 * @version 0.1.0
 * 
 * @example
 * => console.log(deleteRepeat([2, 2, 3, 3, 4, 5, 6, 7, 1, 4, 3]));
 * => [ 2, 3, 4, 5, 6, 7, 1 ]
 * 
 */

// 第一种方法
function deleteRepeat(arr) {
    return Array.from(new Set(arr));
}

// 第二种方法
function deleteRepeat(arr) {
    return arr.filter((item, index, array) => {
        array.indexOf(item) === index;
    })
}

// 第三种方法
function deleteRepeat(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}