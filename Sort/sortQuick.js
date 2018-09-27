/**
 * @description 排序算法 - 快速排序
 * @param {Array}
 * @return {Array}
 */

function sortQuick(arr, left, right){
    var len = arr.length,
        partitionIndex,
        left = typeof left != "number" ? 0 : left,
        right = typeof right != "number" ? len - 1 : right;

    if(left < right){
        partitionIndex = partition(arr, left, right);
        sortQuick(arr, left, partitionIndex - 1);
        sortQuick(arr, partitionIndex+1, right);
    }
    return arr;
}

function partition(arr, left, right){       // 分区操作
    let pivot = left,                       // 设定基准值（pivot）
        index = pivot + 1;
    for(let i = index; i <= right; i++){
        if(arr[i] < arr[pivot]){
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index-1);
    return index - 1;
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


// 示例
let a = [16, 11, 3, 6, 10, 1, 2, 8, 5, 6, 4];
console.log(sortQuick(a));