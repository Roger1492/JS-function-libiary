/**
 * @description 排序算法 - 快速排序
 * @access http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
 * @param {Array}
 * @return {Array}
 */

function sortQuick(arr){
    if(arr.length <= 1) {return arr;}

    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex,1)[0];
    let left = [];
    let right= [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return sortQuick(left).concat(pivot, sortQuick(right));
}

// 示例
let a =  [39, 99, 299, 187, 65, 23, 12, 76, 90, 142, 43, 87, 51, 6, 3];
console.log(sortQuick(a));