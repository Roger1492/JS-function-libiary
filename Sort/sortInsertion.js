/**
 * 
 * 排序算法 - 插入排序
 * 
 * @description
 * 
 * @param {Array}
 * @return {Array}
 */

export function sortInsertion(arr) {
    let len = arr.length;
    let preIndex, current;
    for (let i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}

let a = [16, 11, 3, 6, 10, 1, 2, 8, 5, 6, 4];
console.log(sortInsertion(a))