/**
 * @desc 排序算法 - 选择排序
 * @param {Array}
 * @return {Array}
 */

function selectionSort(arr) {
    let len = arr.length;
    let minIndex;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {        // 寻找最小的数
                minIndex = j;                  // 将最小数的索引保存
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

// 示例：
var a = [16, 11, 3, 6, 10, 1, 2, 8, 5, 6, 4];
console.log(selectionSort(a));