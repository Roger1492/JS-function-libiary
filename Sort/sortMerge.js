/**
 * 
 * 排序算法 - 归并排序
 * 
 * @description
 * 这是一种典型的分而治之思想的算法应用，归并排序的实现有2种方法：
 * 1，自上而下的递归
 * 2，自下而上的迭代
 * 
 * @param {Array}
 * @return {Array}
 */

// 自上而下的递归方法
function sortMerge(arr) {

    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(sortMerge(left), sortMerge(right));
}

function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length) {
        result.push(left.shift());
    }

    while (right.length) {
        result.push(right.shift());
    }

    return result;
}


// 示例
let a = [16, 11, 3, 6, 10, 1, 2, 8, 5, 6, 4];
console.log(sortMerge(a));