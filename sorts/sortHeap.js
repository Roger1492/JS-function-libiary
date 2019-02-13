/**
 * 
 * @name 排序算法 - 堆排序
 * 
 * @description
 * 堆排序是一种利用堆的概念来排序的选择排序，分为2种方法：
 * 1，大顶堆：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于升序排列
 * 2，小顶堆：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于降序排列
 * 
 * @param {Array}
 * @return {Array}
 */

let len;

function sortHeap(arr) {
    buildMaxHeap(arr);

    for (let i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        len--;
        heapify(arr, 0);
    }
    return arr;
}

function buildMaxHeap(arr) {        // 建立大顶堆
    len = arr.length;
    for (let i = Math.floor(len / 2); i >= 0; i--) {
        heapify(arr, i);
    }
}

function heapify(arr, i) {       // 堆调整
    let left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;

    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


// 示例
let a = [16, 11, 3, 6, 10, 1, 2, 8, 5, 6, 4];
console.log(sortHeap(a));